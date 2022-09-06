import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptionTabComponent } from './caption-tab.component';

describe('CaptionTabComponent', () => {
  let component: CaptionTabComponent;
  let fixture: ComponentFixture<CaptionTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaptionTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptionTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
