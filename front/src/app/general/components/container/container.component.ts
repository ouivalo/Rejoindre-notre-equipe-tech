import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {SpinnerComponent} from "../spinner/spinner.component";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  @Input() id = 'default-container';

  constructor() { }

  ngOnInit(): void {
  }

}
