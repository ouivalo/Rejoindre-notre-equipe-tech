import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/general/services/menu.service';
import { MenuItem } from '../../../models/menu.model';

@Component({
  selector: 'app-footermenu',
  templateUrl: './footermenu.component.html',
  styleUrls: ['./footermenu.component.scss']
})
export class FootermenuComponent implements OnInit {
  items : MenuItem[] = []
  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.items = this.menuService.footer_items;
  }

}
