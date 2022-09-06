import {Directive, Input, TemplateRef, ViewContainerRef} from "@angular/core";

@Directive({selector: 'table-header'})
export class TableHeader {
  @Input() label!: string;
  @Input() sorted: boolean = false;
  @Input() field!: string;
  @Input() customField: boolean = false;

  constructor(
    // private templateRef: TemplateRef<any>,
    // private viewContainer: ViewContainerRef,
  ) {
    // console.log(templateRef);
    // console.log(viewContainer);
  }
}
