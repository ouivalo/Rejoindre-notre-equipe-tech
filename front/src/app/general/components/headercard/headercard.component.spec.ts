import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadercardComponent } from './headercard.component';

describe('HeadercardComponent', () => {
  let component: HeadercardComponent;
  let fixture: ComponentFixture<HeadercardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadercardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
