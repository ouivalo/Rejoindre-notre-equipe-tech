import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { MenuItem } from '../../models/menu.model';
import { MenuService } from '../../services/menu.service';
import { HeadermenuComponent } from './headermenu/headermenu.component';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  items: MenuItem[];
  @ViewChild(HeadermenuComponent)
  headerMenu : HeadermenuComponent
  currentRoute: string;

  clickOnMenu : boolean = false;

  constructor(
    private menuService: MenuService,
    private router : Router,
    private route : ActivatedRoute){
      this.currentRoute = "";
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationStart) {
          if(!this.clickOnMenu){
            this.changeActiveOnglet(event.url)
          }
        }

        if (event instanceof NavigationError) {
            // Present error to user
            console.log(event.error);
        }
    });
    }

  ngOnInit() {
    this.items = this.menuService.allPrincipalMenuItems();
  
    //On initialise tous les items
    this.items.map((item)=>{item.expanded=false})

    this.changeActiveOnglet(this.router.url)
  }
  ngAfterViewInit(){
    this.menuService.declareHeaderMenu(this.headerMenu);
  }

  clickOnIcon(item: MenuItem){
    this.clickOnMenu = true;
    this.changeStatusMenuItems(item);
    this.redirectTo(item);
  }
  clickOnText(item:MenuItem){
    this.clickOnMenu = true;

    // Si l'onglet est disabled alors on ne fait rien.
    if(item.disabled){
      return
    }
    // Si l'onglet est ouvert
    if(item.expanded){
      // Alors on change juste les status des menus
      this.changeStatusMenuItems(item);
    }else{

      // Sinon, on change aussi les status puis on redirige.
      this.changeStatusMenuItems(item);
      this.redirectTo(item);
    }
  }
  changeStatusMenuItems(item:MenuItem){
    const tabTest = this.items;

    //On check si l'onglet cliqué est déjà ouvert
    if(item.expanded==true){
      // S'il est déjà ouvert, on le ferme et on rend utilisable tous les autres onglets
      this.items.map((item)=>{item.disabled=false});
      item.expanded=false;
    } else{
      // Sinon check si un onglet est ouvert dans le menu
      const itemExpended = tabTest.filter((item)=>item.expanded==true);

      // S'il y a bien un onglet ouvert
      if(itemExpended.length==1 && itemExpended[0]!=item){
      //alors on le ferme et on le rend disabled.
        itemExpended[0].disabled=true;
        itemExpended[0].expanded=false;

      // On ouvre alors l'onglet cliqué
        item.expanded=true;
        item.disabled=false;
      
      // Si aucun onglet n'est ouvert
      } else if (itemExpended.length===0){
        //alors on rend tous les onglets disabled
        this.items.map((item)=>{item.disabled=true});

      // On ouvre aussi l'onglet cliqué
        item.expanded=true;
        item.disabled=false;
      }
    }
  }

  redirectTo(item : MenuItem){
    if(item.items){
      this.router.navigate([item.items[0].routerLink], {relativeTo: this.route})
    }else{
      this.router.navigate([item.routerLink], {relativeTo: this.route});
    }
    this.clickOnMenu = false;
  }

  resetAll(){
    this.items.map((item)=>{item.disabled=false; item.expanded=false})
  }

  changeActiveOnglet(currentRoute : string){
    this.clickOnMenu = false;
    //On reset tout le menu avant d'ouvrir l'onglet demandé.
    this.resetAll();
    this.items.map((item)=>{
      if(item.state)item.state['active']=false
      if(item.items){
        item.items.map(subItem=>{
          if(subItem.state)subItem.state['active']=false
        })
      }
    })

    //On parcourt tout le menu pour checker si l'URL correspond à un URL/routerLink d'un onglet
    this.items.map((item)=>{
      if(item.url && currentRoute.includes(item.url) || currentRoute.includes(item.routerLink)){
        //On change tous les status du menu
        this.changeStatusMenuItems(item);

        if(item.state){
          item.state["active"] = true
        }
        //Si l'onglet possède un sous menu, alors on va chercher celui correspondant
        if(item.items){
          item.items.map(subItem=>{
            if(subItem.routerLink.includes(currentRoute)){
              if(subItem.state)subItem.state['active']=true
              this.changeStatusMenuItems(item)
            }
          })
        }else{
          this.changeStatusMenuItems(item)
        }
      }
    })
  }
}
