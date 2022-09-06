import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-return-button',
  templateUrl: './return-button.component.html',
  styleUrls: ['./return-button.component.scss']
})
export class ReturnButtonComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit(): void {
  }
  goBack(){
    this._location.back();
  }
}
