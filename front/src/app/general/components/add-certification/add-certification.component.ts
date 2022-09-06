import { Location } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CertificationComplete } from 'src/app/general/models/certification.models';
import { ProfilsService } from 'src/app/profils/services/profils.service';
import { AuthService } from '../../../authentification/services/auth.service';
import { CompteService } from '../../services/compte.service';
import { DatesService } from '../../services/dates.service';


interface Organisme {
  id:number,
  nom:number,
}

@Component({
  selector: 'app-add-certification',
  templateUrl: './add-certification.component.html',
  styleUrls: ['./add-certification.component.scss']
})


export class AddCertificationComponent implements OnInit {
  @HostBinding('class') classes = 'content';

  //On check à quoi est utile ce composant (création d'une certif, première création, ou modification)
  isCreation : boolean = true;
  isFirstConnexion:boolean =false;

  //On crée le titre du composant en fonction de son action
  titre : string;

  //Messages d'erreur du formulaire
  isNotCompleted : boolean = false;
  ErrorDates : boolean = false;

  //Type des certifications
  certificationTypes : {id:number, nom:string}[];
  certificationLevels = ["Niveau 3", "Niveau 4", "Niveau 5", "Niveau 6", "Niveau 7", "Niveau 8"]
  //Création du form
  form : FormGroup = new FormGroup({});

  //Gestion des erreurs
  error:boolean = false;
  errorUser:boolean=false;
  errorAccess:boolean=false;
  errorEnvoiForm:boolean=false;
  errorMessage:string;

  organismeID : number;
  constructor(
    private router :Router,
    private route : ActivatedRoute, 
    private location: Location, 
    private ProfilService : ProfilsService,
    private AuthService : AuthService,
    private formBuilder : FormBuilder,
    private CompteService : CompteService,
    private DatesService : DatesService) { }


  ngOnInit(): void {
    this.errorAccess=true;
    this.errorUser=true;
    this.AuthService.user().subscribe({
      next:user=>{
        if(user.groups && user.groups[0] && user.groups[0].name === "CERTIFICATEUR"){
          this.initForm();
          this.error=false;
          this.errorAccess=false;
          this.errorUser=false;
          console.log(this.form.value.type)
        }else{
          this.error=true;
          this.errorAccess=true;
          this.errorMessage="Vous ne pouvez pas ajouter de nouvelle certification car vous n'avez pas le rôle certificateur. Si c'est une erreur, merci de contacter l'assistance."
        }
      }
    })


  }

  initForm(){
    this.form = this.formBuilder.group({
      certificateur:['', Validators.required],
      nom:['', Validators.required],
      debut_validite:['', Validators.required],
      descriptif:['', Validators.required],
      domaine:['', Validators.required],
      fin_validite:['', Validators.required],
      identifiant_cpf:[null, Validators.required],
      niveau:[this.certificationLevels[0]],
      numero:[null, Validators.required],
      type:1,
      validateur:['', Validators.required],
      organisme:['', Validators.required],
    })

    this.AuthService.organisme().subscribe({
      next : (organisme) => {
          this.organismeID = organisme.id
      },
      error:(err)=>{
        this.error=true;
        this.errorUser=true;
        this.errorMessage="Il y a eu une erreur lors du chargement du formulaire (Utilisateur/organisme connecté erroné). Merci de réessayer plus tard."

      }
    })

    const actualRouteName = this.route.snapshot.url[0].path;
    const id=this.route.snapshot.paramMap.get("id");

    if(actualRouteName==="addCertif"){
      this.isFirstConnexion = true;
      this.titre = "Créer ma première certification";
    }else if(actualRouteName==="ajouter"){
      this.titre = "Nouvelle certification";
    }else if(actualRouteName==="modifier"){
      this.titre = "Modifier une certification";
      this.isCreation=false;
    }
    if(id){
      //Afficher les valeurs de la certification à mettre à jour
      this.ProfilService.getDetailsCertification(id).subscribe({
        next:(certification)=>{
          this.form.setValue({certificateur:certification.certificateur,nom:certification.nom,
            debut_validite:this.DatesService.americanDateStringToFrenchDateString(certification.debut_validite),
            descriptif:certification.descriptif,
            domaine:certification.domaine,
            fin_validite:this.DatesService.americanDateStringToFrenchDateString(certification.fin_validite),
            identifiant_cpf:certification.identifiant_cpf,
            niveau:certification.niveau,
            numero:certification.numero,
            type:certification.type,
            validateur:certification.validateur,
            organisme:certification.organisme})
        },
        error:(err)=>{
          this.error=true;
          this.errorAccess=true;
          this.errorMessage="Vous n'avez pas accès à cette certification."
        }
      }
      )
    }

    //Aller chercher les types de certifications
    this.CompteService.findCertificationTypes().subscribe(types => this.certificationTypes = types);

  }


  sendData(){
    //Ajout de l'ID de l'organisme
    this.form.controls['organisme'].setValue(this.organismeID)
    this.isNotCompleted=false;
    this.ErrorDates=false;
    
    //Vérification si tous les champs sont ajoutés : 
    if(this.form.invalid){
      this.isNotCompleted=true;
      return
    }

    //Vérification des dates
    if(this.form.value.debut_validite>this.form.value.fin_validite){
      this.ErrorDates=true;
      return
    }

    this.form.value.debut_validite = this.DatesService.dateStringToAmericanFormat(this.form.value.debut_validite)
    this.form.value.fin_validite = this.DatesService.dateStringToAmericanFormat(this.form.value.fin_validite)

    if(this.form.value.type===2){
      this.form.value.niveau = null;
    }

    //TODO checker le type des informations ?
    if(this.isCreation){
      let newCertification : CertificationComplete

      //Ajout de la certification puis redirection vers la page récapitulatif
      this.CompteService.addCertif(this.form.value).subscribe({
        next(value :Object) {
          newCertification = <CertificationComplete> value;
        },
        complete:()=>{
          this.router.navigate(['recapitulatif', newCertification.id], { relativeTo: this.route.parent})
        },
        error:(err:HttpErrorResponse)=>{
          this.error=true;
          this.errorEnvoiForm=true;
          
          console.log(err)
          this.errorMessage="Il y a eu un problème lors de l'envoi du formulaire, merci de réessayer."

        },
      })
    }else{
      //Modification de la certification 
      this.CompteService.modifyCertif(this.form.value, this.route.snapshot.paramMap.get("id")).subscribe({
        complete:()=>{
          this.router.navigate(['/compte/profils'])
        },
        error:(err:HttpErrorResponse)=>{
          this.error=true;
          this.errorEnvoiForm=true;
          this.errorMessage="Il y a eu un problème lors de l'envoi du formulaire, merci de réessayer."
        }
      })
    }

    }

  goBack(){
    this.location.back();
  }

  disableLevels(){
    if(this.form.value.type===2){
      this.form.controls['niveau'].disable()
    }else{
      this.form.controls['niveau'].enable()
    }
  }
}
