import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footercard',
  templateUrl: './footercard.component.html',
  styleUrls: ['./footercard.component.scss']
})
export class FootercardComponent implements OnInit {
  @Input('buttonRight') buttonLeft? : string; // à changer par un type spécifique avec une action à effectuer
  @Input('buttonLeft') buttonRight? : string; // 
  constructor() { }

  ngOnInit(): void {
    this.buttonLeft;
    this.buttonRight;
  }

}
