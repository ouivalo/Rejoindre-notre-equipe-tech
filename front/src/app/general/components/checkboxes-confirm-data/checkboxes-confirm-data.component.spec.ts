import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxesConfirmDataComponent } from './checkboxes-confirm-data.component';

describe('CheckboxesConfirmDataComponent', () => {
  let component: CheckboxesConfirmDataComponent;
  let fixture: ComponentFixture<CheckboxesConfirmDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxesConfirmDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxesConfirmDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
