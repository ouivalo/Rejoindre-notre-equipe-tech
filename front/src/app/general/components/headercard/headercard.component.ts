import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-headercard',
  templateUrl: './headercard.component.html',
  styleUrls: ['./headercard.component.scss']
})
export class HeadercardComponent implements OnInit {
  @Input() headerTitle : string;
  @Input() description : string;

  constructor() { }

  ngOnInit(): void {
    this.headerTitle;
    this.description;
  }

}
