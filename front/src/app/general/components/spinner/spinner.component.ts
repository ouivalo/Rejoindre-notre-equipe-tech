import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {SpinnerService} from "../../services/spinner.service";

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit, OnDestroy {
  public visible = false;

  @Input() id = 'default-spinner';

  spinnerChange: Subscription;

  constructor(private spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.spinnerChange = this.spinnerService.onChange(this.id).subscribe({
      next: (state: boolean) => {
        // console.log(`Change ${this.id} to ${state}`);
        this.visible = state;
      }
    });
  }

  ngOnDestroy() {
    this.spinnerChange.unsubscribe();
  }
}
