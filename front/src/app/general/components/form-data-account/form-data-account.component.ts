import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/authentification/services/auth.service';
import { OrganismeInformations } from 'src/app/partenaires/models/partenaires.modele';
import { CompteService } from '../../services/compte.service';
import { PhoneNumberService } from '../../services/phone-number.service';

@Component({
  selector: 'app-form-data-account',
  templateUrl: './form-data-account.component.html',
  styleUrls: ['./form-data-account.component.scss']
})
export class FormDataAccountComponent implements OnInit {
  @Input('isFirstConnexion') isFirstConnexion : boolean;
  form : FormGroup = new FormGroup({});
  error : boolean = false;
  errorMessage : string;
  organismeID : number;
  userID : number;

  organismeConnected : OrganismeInformations;
  constructor(
    private router : Router, 
    private route : ActivatedRoute, 
    private formBuilder : FormBuilder, 
    private AuthService : AuthService,
    private CompteService : CompteService,
    private MessageService : MessageService,
    private PhoneService : PhoneNumberService) { }
  @HostBinding('class') classes = 'content';

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.AuthService.organisme().subscribe({
      next:value=>{
        this.organismeConnected = value;
        this.organismeID=value.id
        this.userID = value.utilisateur.id;
          this.createForm(value);
      },
      error:err=>{
        console.log(err)
      }
    })
  }

  // Ici on personnalisera en fonction d'où le form est utilisé.
  sendData(){
    this.error=false;
    if(this.form.invalid){
      this.error=true;
      this.errorMessage = "Merci de bien remplir tous les champs."
      return
    }

    if(this.form.value.email !== this.form.value.confirm_email){
      this.error=true;
      this.errorMessage = "l'adresse mail doit être identique."
      return
    }
    this.form.value.telephone = this.PhoneService.StringtoIntPhone(this.form.value.telephone)
    

    let newOrganisme = {
      email:this.form.value.email,
      utilisateur:{
        id:this.userID,
        email:this.form.value.email,
        first_name:this.form.value.prenom,
        last_name:this.form.value.nom
      },
      nom:this.form.value.entreprise,
      adresse : this.form.value.adresse,
      code_postal:this.form.value.code_postal,
      ville:this.form.value.ville,
      pays:this.form.value.pays,
      telephone:this.form.value.telephone
    }

    this.CompteService.newAccount(newOrganisme, this.organismeID).subscribe({
      complete:()=>{
        if(this.isFirstConnexion){

          this.AuthService.user().subscribe({
            next:value=>{
              if(value.groups && value.groups[0] && value.groups[0].name == "CERTIFICATEUR"){
                this.router.navigate(['addCertif'], { relativeTo: this.route.parent?.parent})
              }else{
                this.router.navigate(['../validation'], { relativeTo:this.route.parent})
              }
              console.log(value.groups)
            }
          })

        }else{
          this.MessageService.add({severity:"success", detail:"Vos informations ont bien été mises à jour."})
          this.reloadData();
        }
      }, 
      error:err=>{
        this.error=true;
        this.errorMessage="Il y a eu un problème lors de l'ajout des données."
      }
    })


  }

  createForm(data : any){
    this.form = this.formBuilder.group({
      nom:[data.utilisateur.last_name, Validators.required],
      prenom:[data.utilisateur.first_name, Validators.required],
      entreprise : [data.nom, Validators.required],
      email:[data.email, [Validators.required, Validators.email]],
      confirm_email:[data.email, [Validators.required, Validators.email]],
      siret:[data.siret, Validators.required],
      telephone:[data.telephone, Validators.required],
      adresse:[data.adresse, Validators.required],
      ville:[data.ville, Validators.required],
      code_postal:[data.code_postal, Validators.required],
      pays:[data.pays, Validators.required]
    })
  }
}
