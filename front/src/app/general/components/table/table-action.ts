import {Directive, EventEmitter, Input, Output} from "@angular/core";

@Directive({selector: 'table-action'})
export class TableAction {
  @Input() label!: string;
  // @Input() click!: Function;

  @Output() click: EventEmitter<any> = new EventEmitter<any>();
}
