import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailsCertification } from 'src/app/general/models/certification.models';
import { CompteService } from 'src/app/general/services/compte.service';

@Component({
  selector: 'app-card-recap',
  templateUrl: './card-recap.component.html',
  styleUrls: ['./card-recap.component.scss']
})
export class CardRecapComponent implements OnInit {
  @Input() isAuthPage:boolean =false;
  @Input() isProfilsPage:boolean=false;
  @Input() isComptePage:boolean=false;


  @Input() certification : DetailsCertification;

  certificationTypeName : string | undefined;
  constructor(
    private route : ActivatedRoute, 
    private router : Router,
    private CompteService : CompteService) { }

  ngOnInit(): void {
    this.CompteService.findCertificationTypes().subscribe({
      next:(types)=>{
        const typeFound = types.find((type)=>{
          return type.id==this.certification.type
        })
        console.log(typeFound)
        this.certificationTypeName = typeFound?.nom
        
      },error:(err)=>{
        console.log(err)
      }
    });
  }
  sendData(){
    this.router.navigate(['validation'], { relativeTo:this.route.parent})
  }
}
