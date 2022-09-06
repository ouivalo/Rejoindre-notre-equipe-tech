import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDataAccountComponent } from './form-data-account.component';

describe('FormDataAccountComponent', () => {
  let component: FormDataAccountComponent;
  let fixture: ComponentFixture<FormDataAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDataAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDataAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
