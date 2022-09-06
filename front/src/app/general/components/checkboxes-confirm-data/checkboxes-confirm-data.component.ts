import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checkboxes-confirm-data',
  templateUrl: './checkboxes-confirm-data.component.html',
  styleUrls: ['./checkboxes-confirm-data.component.scss']
})
export class CheckboxesConfirmDataComponent implements OnInit {
  
  @Output('valueCheckBoxVerification') valueCheckBoxVerification: boolean;
  @Output('valueCheckBoxConditions') valueCheckBoxConditions: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
