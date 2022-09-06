import { Component, Input, OnInit } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-caption-tab',
  templateUrl: './caption-tab.component.html',
  styleUrls: ['./caption-tab.component.scss']
})
export class CaptionTabComponent implements OnInit {
  @Input() datatable : Table;
  constructor() { }

  ngOnInit(): void {
  }

}
