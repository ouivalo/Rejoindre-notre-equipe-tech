import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordInitialisationComponent } from './password-initialisation.component';

describe('PasswordInitialisationComponent', () => {
  let component: PasswordInitialisationComponent;
  let fixture: ComponentFixture<PasswordInitialisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordInitialisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordInitialisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
