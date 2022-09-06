import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit {
  @Input("items") items : MenuItem[]; 
  constructor() { }

  ngOnInit(): void {
    this.items;
  }

}
