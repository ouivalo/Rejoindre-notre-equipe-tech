import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabmenuYearsComponent } from './tabmenu-years.component';

describe('TabmenuYearsComponent', () => {
  let component: TabmenuYearsComponent;
  let fixture: ComponentFixture<TabmenuYearsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabmenuYearsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabmenuYearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
