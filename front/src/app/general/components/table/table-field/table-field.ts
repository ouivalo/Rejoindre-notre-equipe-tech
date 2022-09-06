import {Component, Input, TemplateRef} from "@angular/core";

@Component({
  selector: 'table-field',
  template: 'table field template here'
})
export class TableField {
  @Input() header!: string;
  @Input() sortable: boolean = false;
  @Input() field!: string;
  @Input() prefix?: string;
  @Input() suffix?: string;
  @Input() format!: string;
  @Input() template: TemplateRef<any> | null;
  @Input() width: string = 'auto';
}
