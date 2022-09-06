import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CompteService } from '../../services/compte.service';

@Component({
  selector: 'app-password-initialisation',
  templateUrl: './password-initialisation.component.html',
  styleUrls: ['./password-initialisation.component.scss']
})
export class PasswordInitialisationComponent implements OnInit {
  @Input() isCreation : boolean = true;
  form : FormGroup = new FormGroup({});
  error : boolean = false;
  errorMessage : string;
  constructor(
    private formBuilder : FormBuilder, 
    private CompteService : CompteService,
    private MessageService : MessageService,
    private router : Router,
    private route : ActivatedRoute) { }
  @HostBinding('class') classes = 'content';

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      new_password1:['', Validators.required],
      new_password2:['', Validators.required],
    })
  }
  resetForm(){
    this.form.reset();
    this.error=false;
  }
  nextStep(){
    this.sendData();



  }

  sendData(){
    const regex = new RegExp("[a-zA-Z]");

    this.error=false;
    if(this.form.invalid){
      this.error=true;
      this.errorMessage="Merci de remplir tous les champs."
      return
    }
    if(this.form.value.new_password1 !== this.form.value.new_password2){
      this.error=true;
      this.errorMessage="Les 2 mots de passe ne correspondent pas."
      return
    }
    if(this.form.value.new_password1.length<8){
      this.error=true;
      this.errorMessage="Le mot de passe doit contenir au moins 8 caractères"
      return
    }

    if(!regex.test(this.form.value.new_password1)){
      this.error=true;
      this.errorMessage="Le mot de passe ne peut pas être composé uniquement de chiffres."
      return
    }
    
      this.CompteService.changePassword(this.form.value).subscribe({
        complete:()=>{
          this.MessageService.add({severity:'success', detail:"Le mot de passe a bien été changé."});
          this.resetForm();
          if(this.isCreation){
            this.router.navigate(['infos'], { relativeTo: this.route})
          }
        },
        error:(err)=>{  
          this.errorMessage="Il y a eu un problème lors du changement de mot de passe. Merci de réessayer ou de contacter l'assistance."
          if(err.error && err.error.new_password2){
            if(err.error.new_password2[0]=="This password is too common."){
              this.errorMessage="Ce mot de passe est trop commun."
            }else{
              this.errorMessage="Ce mot de passe est trop similaire aux données utilisateur de ce compte (nom, prénom, mail, etc.)"
            }
          }
          this.error=true;}
      })

   

  }



}
