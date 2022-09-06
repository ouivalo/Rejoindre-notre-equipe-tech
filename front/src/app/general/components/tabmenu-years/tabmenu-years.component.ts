import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from '../../models/menu.model';

@Component({
  selector: 'app-tabmenu-years',
  templateUrl: './tabmenu-years.component.html',
  styleUrls: ['./tabmenu-years.component.scss']
})
export class TabmenuYearsComponent implements OnInit {

  annees: MenuItem[] = [];
  anneeDepart: number = 2020;
  anneeCourante: number;
  
  @Output() activeAnnee = new EventEmitter<any>();

  constructor() {
    
    this.anneeCourante = new Date().getFullYear();
    let tab: MenuItem[] = []
    for(let year = this.anneeDepart; year <= this.anneeCourante; year++){
      tab.push({
        label: ""+year
      });
    }
    this.annees= tab;

  }

  ngOnInit(): void {
    
  }

  changeYear($event:any){
    this.activeAnnee.emit($event);
  }

  

}
