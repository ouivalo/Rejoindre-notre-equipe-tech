import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import { ProfilsService } from 'src/app/profils/services/profils.service';
import {NotificationService} from "../../services/notification.service";

@Component({
  selector: 'app-compte-layout-view',
  templateUrl: './compte-layout-view.component.html',
  styleUrls: ['./compte-layout-view.component.scss']
})
export class CompteLayoutViewComponent implements OnInit {
  profilConnected : boolean
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private router: Router,
    private ProfilsService : ProfilsService
  ) { }

  darkModeUrls = ['/compte/parametres', '/compte/accesbluedegree'];
  darkMode = false;
  paramPage = false;

  ngOnInit(): void {
    if(!this.ProfilsService.getProfil()){
      this.router.navigate(['/compte/profils'])
      return
    }else{
      this.profilConnected = true
    }
    this.renderer.addClass(this.document.body, 'body-compte');

    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.darkMode = false;
        this.darkModeUrls.forEach(url => {
          if (this.router.url.startsWith(url)) {
            this.darkMode = true;
          }
          if (this.router.url.startsWith("/compte/parametres")) {
            this.paramPage = true;
          }else{
            this.paramPage = false;
          }
          
        });
      }
    });
  }
  ngOnDestroy():void{
    this.renderer.removeClass(this.document.body, 'body-compte');
  }
}
