import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRecapComponent } from './card-recap.component';

describe('CardRecapComponent', () => {
  let component: CardRecapComponent;
  let fixture: ComponentFixture<CardRecapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardRecapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
