import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../../models/menu.model';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  items: MenuItem[];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.items=this.menuService.allItems();
}

}
