import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnInit {
  @Input() dt : Table
  @ViewChild('input')
  input: ElementRef;

  searchText: string; // Contient la chaine de caractère utilisée pour le filtre.
  constructor() { }

  ngOnInit(): void {
  }
  
  applyFilterGlobal(event: string){
    console.log(event)
    this.searchText = event;
    this.dt.filterGlobal(this.searchText, 'contains')
    
    console.log(this.dt._value)
  }

}
