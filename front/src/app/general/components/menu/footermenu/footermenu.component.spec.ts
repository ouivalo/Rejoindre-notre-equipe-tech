import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootermenuComponent } from './footermenu.component';

describe('FootermenuComponent', () => {
  let component: FootermenuComponent;
  let fixture: ComponentFixture<FootermenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootermenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootermenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
