import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageCardCustomComponent } from './landing-page-card-custom.component';

describe('LandingPageCardCustomComponent', () => {
  let component: LandingPageCardCustomComponent;
  let fixture: ComponentFixture<LandingPageCardCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageCardCustomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageCardCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
