import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/authentification/services/auth.service';

@Component({
  selector: 'app-landing-page-header',
  templateUrl: './landing-page-header.component.html',
  styleUrls: ['./landing-page-header.component.scss']
})
export class LandingPageHeaderComponent implements OnInit {
  isLoggedIn : boolean = false;
  @Input() isProfilPage : boolean = false;
  constructor(private AuthService : AuthService, private MessageService : MessageService, private router : Router) { }

  ngOnInit(): void {
    this.isLoggedIn = this.AuthService.isLoggedIn;
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
