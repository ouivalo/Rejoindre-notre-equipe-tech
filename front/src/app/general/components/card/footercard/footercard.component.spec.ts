import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootercardComponent } from './footercard.component';

describe('FootercardComponent', () => {
  let component: FootercardComponent;
  let fixture: ComponentFixture<FootercardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootercardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
