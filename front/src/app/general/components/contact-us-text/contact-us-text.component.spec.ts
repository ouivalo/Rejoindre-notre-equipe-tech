import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsTextComponent } from './contact-us-text.component';

describe('ContactUsTextComponent', () => {
  let component: ContactUsTextComponent;
  let fixture: ComponentFixture<ContactUsTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUsTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
