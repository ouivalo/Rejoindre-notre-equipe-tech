import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/authentification/services/auth.service';
import { MenuService } from 'src/app/general/services/menu.service';
import { ProfilsService } from 'src/app/profils/services/profils.service';

@Component({
  selector: 'app-headermenu',
  templateUrl: './headermenu.component.html',
  styleUrls: ['./headermenu.component.scss']
})
export class HeadermenuComponent implements OnInit {
  CenterName : string;
  CertificationName: string;
  srcImage : string;
  defaultImage : string = "./assets/img/placeholder_avatar.png"
  constructor( private router : Router, 
    private ProfilService : ProfilsService, 
    private AuthService : AuthService, 
    private MessageService : MessageService,
    private MenuService : MenuService) { }

  ngOnInit(): void {
    const profilFound = this.ProfilService.getProfil()
    if(profilFound){
      this.CenterName = profilFound.certification.nom_organisme;
      this.CertificationName= profilFound.certification.nom + " | " + profilFound.certification.type_certification + profilFound.certification.numero
    } else{
      this.router.navigate(["/compte/profils"]);
    }
    this.MenuService.searchImg().subscribe({
      complete:()=>{
      this.srcImage = "/api/compte/avatar/"+this.ProfilService.getProfil()?.organisme+"/?open=true" 

      },
      error:(err)=>{
        this.srcImage = this.defaultImage;
      }
    })
  }


  reloadImg(){
    setTimeout(()=>{
      this.srcImage = this.defaultImage;
      this.MenuService.searchImg().subscribe({
        complete:()=>{
        this.srcImage = "/api/compte/avatar/"+this.ProfilService.getProfil()?.organisme+"/?open=true" 
  
        },
        error:()=>{
          this.srcImage = this.defaultImage;
        }
      })
    }, 2000)
  }

  deconnexion(){
    this.AuthService.logout().subscribe({
      complete:()=>{
        this.MessageService.add({severity:"success", detail:"Vous êtes bien déconnecté."})
        this.router.navigate(['/authentification/connexion'])
      },
      error:()=>{
        this.MessageService.add({severity:"error", summary:"Erreur", detail:"Il y a eu une erreur lors de la déconnexion."})
      }
    })
  }

}
