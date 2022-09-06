import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page-card-custom',
  templateUrl: './landing-page-card-custom.component.html',
  styleUrls: ['./landing-page-card-custom.component.scss']
})
export class LandingPageCardCustomComponent implements OnInit {

  @Input('headerTitle') headerTitle : string;

  constructor() { }

  ngOnInit(): void {
    this.headerTitle;
  }

}
