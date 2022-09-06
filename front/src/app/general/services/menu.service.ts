import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfilsService } from 'src/app/profils/services/profils.service';
import { HeadermenuComponent } from '../components/menu/headermenu/headermenu.component';
import { MenuItem } from '../models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  footer_items : MenuItem[] = [
    {label:"Bibliothèque Pédagogique", icon:"custom-icons icon-bibliotheque", routerLink:"/bibliothèque", style: "fond-bleu"},
    {label:"Démonstrations & vidéos", icon:"custom-icons icon-webinaire", routerLink:"webinaires", style: "fond-bleu"},
    {label:"Aide", icon:"custom-icons icon-assistance", routerLink:"assistance", style: "fond-blanc"}]

  constructor(private ProfilService : ProfilsService, private http : HttpClient) { }
  headerMenu : HeadermenuComponent

  allItems(): MenuItem[]{
    let tab = this.allPrincipalMenuItems().concat(this.footer_items);
    return tab;
  }

  declareHeaderMenu(headerMenuComponent : HeadermenuComponent){
    this.headerMenu = headerMenuComponent;
  }

  reloadImg(){
    this.headerMenu.reloadImg();
  }

  searchImg(){
    return this.http.get('/api/compte/avatar/'+this.ProfilService.getProfil()?.organisme+'/?open=true', {responseType:"text"})
  }

  allPrincipalMenuItems(): MenuItem[]{

    const isPartenaire = this.ProfilService.getProfil()?.role==="PARTENAIRE"
    let menu: MenuItem[] = [
      {
        label: 'Documents gestion certifications',
        icon: 'custom-icons icon-doc-certif',
        url:'certification',
        items:[
          {label:'Documents Certificateurs',
          routerLink:'certification/documents',
          state:{
            active:false
          },
        },
        {label:'Contenus Pédagogiques',
        routerLink:"certification/contenus",
        state:{
          active:false
        }}
        ],
        state:{
          active:false
        }

      },
      {
        label: 'Documents administratifs partenaires',
        icon: 'custom-icons icon-doc-partenaire',
        url:'partenaires/documents',

        items: [
          { label: 'Documents partenaires', 
          routerLink: 'partenaires/documents',
          state:{
            active:false
          }},
        ],
        state:{
          active:false
        }
      },
      {
        label: 'Habilitation des partenaires',
        icon: 'custom-icons icon-habilitation',
        url:'partenaires/habilitations',
        items: [
          {
            label: 'Informations partenaires', 
            routerLink: 'partenaires/habilitations',
            state:{
              active:false
            }
          },
        ],
        state:{
          active:false
        }
      },
      {
        label: 'Règlements',
        icon: 'custom-icons icon-reglement',
        routerLink: 'reglements',

      },
      {
        label: 'Suivi des stagiaires',
        icon: 'custom-icons icon-stagiaire',
        url:'stagiaires',
        items: [
          {
            label: 'Cohortes', 
            routerLink: 'stagiaires/cohortes',
            state:{
              active:false
            }
          },
          {
            label: 'Accrochage', 
            routerLink: 'stagiaires/accrochage',
            state:{
              active:false
            }
          },
          {
            label: 'Suivi insertion', 
            routerLink: 'stagiaires/insertion',
            state:{
              active:false
            }
          },{
            label: 'Handicap', 
            routerLink: 'stagiaires/handicap',
            state:{
              active:false
            }
          },
        ],
        state:{
          active:false
        }
      },
    ]

    if(isPartenaire){
      menu.push( {
        label: 'Examens',
        icon: 'custom-icons icon-examen',
        url:'examens',
        items: [
          {
            label: 'Résultats', 
            routerLink: 'examens/resultats',
            state:{
              active:false
            }
          },
          {
            label: 'Centre d\'examens & jury', 
            routerLink: 'examens/centres',
            state:{
              active:false
            }
          },
        ],
        state:{
          active:false
        }
      })
    }else{
      menu.push( {
        label: 'Examens',
        icon: 'custom-icons icon-examen',
        url:'examens',
        state:{
          active:false
        },
        items: [
          {
            label: 'Résultats par partenaires', 
            routerLink: 'examens/resultats/partenaires',
            state:{
              active:false
            }
          },
          {
            label: 'Résultats par stagiaires', 
            routerLink: 'examens/resultats/stagiaires',
            state:{
              active:false
            }
          },
          {
            label: 'Centre d\'examens & jury', 
            routerLink: 'examens/centres',
            state:{
              active:false
            }
          },
        ],
      },
      {
        label: 'Accès Blue Degree',
        icon: 'custom-icons icon-acces',
        routerLink:'accesbluedegree',
      },)
    }
    return menu
  }
}
