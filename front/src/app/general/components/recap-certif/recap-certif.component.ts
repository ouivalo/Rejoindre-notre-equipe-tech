import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { DetailsCertification } from '../../models/certification.models';
import { ProfilsService } from '../../../profils/services/profils.service';
import { DatesService } from '../../services/dates.service';

@Component({
  selector: 'app-recap-certif',
  templateUrl: './recap-certif.component.html',
  styleUrls: ['./recap-certif.component.scss']
})
export class RecapCertifComponent implements OnInit {
  isAuthPage:boolean =false;
  isProfilsPage:boolean=false;
  isComptePage:boolean=false;


  certification : DetailsCertification;
  certificationID : string;
  error:boolean;
  constructor(
    private route : ActivatedRoute, 
    private router : Router, 
    private ProfilService : ProfilsService,
    private DateService : DatesService){}

  @HostBinding('class') classes = 'content';

  ngOnInit(): void {
    const paramID = this.route.snapshot.paramMap.get("id");
    if(this.router.url.startsWith("/compte/recapitulatif")){
      this.isComptePage = true;
      this.certificationID = this.ProfilService.getProfil().certification.id.toString();
    }else if(this.router.url.startsWith('/compte/profils/recapitulatif')){
      this.isProfilsPage = true;
      if(paramID){
        this.certificationID = paramID;
      }
    }else if(this.router.url.startsWith('/authentification')){
      this.isAuthPage = true;
      if(paramID){
        this.certificationID = paramID;
      }
    }

    //aller chercher la certification ajoutée pour afficher le récap
    this.ProfilService.getDetailsCertification(this.certificationID).subscribe(
      {next : (certification) =>{
        this.certification=certification;
        this.certification.debut_validite = this.DateService.dateToString(this.certification.debut_validite);
        this.certification.fin_validite = this.DateService.dateToString(this.certification.fin_validite);
      },
      error:(err)=>{
          this.error=true;
      }
    }
  )
  }


}
