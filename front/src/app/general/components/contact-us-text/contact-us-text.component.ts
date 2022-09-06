import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us-text',
  templateUrl: './contact-us-text.component.html',
  styleUrls: ['./contact-us-text.component.scss']
})
export class ContactUsTextComponent implements OnInit {
  @Input('firstText') firstText : string;
  @Input('routerLink') routerLink : any = "contact";
  @Input('linkText') linkText : string = "Contactez-nous";
  constructor() { }

  ngOnInit(): void {
    this.firstText;
    this.routerLink;
    this.linkText;
  }

}
