import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnButtonComponent } from './return-button.component';

describe('ReturnButtonComponent', () => {
  let component: ReturnButtonComponent;
  let fixture: ComponentFixture<ReturnButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
