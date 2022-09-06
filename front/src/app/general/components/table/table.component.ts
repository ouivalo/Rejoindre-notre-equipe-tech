import {Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList} from '@angular/core';
import {TableAction} from "./table-action";
import {TableField} from "./table-field/table-field";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {
  public selection: any;

  @Input() noCaptionTab: boolean = false;
  @Input() data: Object[] = [];
  @Input() selectionMode: 'none' | 'single' | 'multiple' = 'none';
  @Input() searchBarEnable: boolean = false;

  @Output() onRowSelect = new EventEmitter<any>();
  @Output() onRowUnselect = new EventEmitter<any>();

  @ContentChildren(TableField) columns: QueryList<TableField>;
  @ContentChildren(TableAction) actions: QueryList<TableAction>;

  constructor() {
  }


  ngOnInit() {
    // this.data.push({
    //     test: 'Hello World',
    //     test1: 'Hello World',
    //     test2: 'Hello World',
    //     date: Date.now(),
    //   },
    //   {
    //     test: 'OUIVALO',
    //     test1: 'OUIVALO',
    //     test2: 'OUIVALO',
    //     date: Date.now(),
    //   },
    //   {
    //     test: 'NONVALO',
    //     test1: 'NONVALO',
    //     test2: 'NONVALO',
    //     date: Date.now(),
    //   }
    // );
  }

  select(data: Object | Object[] | null) {
    if (this.selectionMode === 'none')
      return;

    if (data == null) {
      this.selection = null;
      return;
    }

    if (this.selectionMode === 'single' && data instanceof Array) {
      this.selection = data[0];
      return;
    }

    if (this.selectionMode === 'multiple' && data instanceof Object) {
      this.selection = [data];
      return;
    }

    this.selection = data;
  }

  hasSelection() {
    return this.selection != null;
  }


  public getValue(obj: any, path: string) {
    const fullPath = path.split('.');
    return fullPath.every((step) => (step && (obj = obj[step])) !== undefined ) ? obj : undefined;
  }

  public format(value: string, format: string) {
    if (!format)
      return value;

    const split = format.split(':');
    format = split[0];
    const params = split[1]?.split(',');

    if (!params)
      return this.pipe.apply(null, [format, value]);

    return this.pipe.apply(null, [format, value, ...params]);
  }

  private pipe(pipe: string, value: string, ...args: any) {
    switch (pipe) {
      case 'phone':
        return `0${value}`.replace(/(\d{2})/g, '$1 ');
      case 'date':
        return new DatePipe('fr').transform(value, ...args);
      default:
        return value;
    }
  }

  public actionDisabled() {
    if (this.selectionMode === 'single')
      return this.selection == null;

    if (this.selectionMode === 'multiple' && this.selection instanceof Array)
      return this.selection.length === 0;

      return true;
  }
}
