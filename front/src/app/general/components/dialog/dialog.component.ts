import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  displayDialog : boolean;
  @Input() headerTitle : string;
  @Input() dialogWidth:string;
  @Input() hrTitle : boolean = true;

  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();
  @Output() onOpen: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }

  openDialog() {
    this.displayDialog = true;
  }

  close(){
    this.displayDialog=false;
  }
}
