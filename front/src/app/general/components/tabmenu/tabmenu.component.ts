import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { MenuItem } from '../../models/menu.model';

@Component({
  selector: 'app-tabmenu',
  templateUrl: './tabmenu.component.html',
  styleUrls: ['./tabmenu.component.scss']
})
export class TabmenuComponent implements OnChanges {
  
  @Input() items: MenuItem[];
  @Input() firstIndex: number;
  @Output() activeItem = new EventEmitter<any>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    // changes.prop contains the old and the new value...
    console.log(changes);
    this.listenItems();
  }

   listenItems(): void{

    console.log("set up items tabmenu", this.items);
    
    for(let item of this.items){
      item.command = (event) => {
          //event.originalEvent: Browser event
          //event.item: menuitem metadata
          this.activeItem.emit(event.item);
        }
    }
    this.activeItem.emit(this.items[this.firstIndex]);
    
  }

  

}

