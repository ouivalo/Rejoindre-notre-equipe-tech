import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompteLayoutViewComponent } from './compte-layout-view.component';

describe('CompteLayoutViewComponent', () => {
  let component: CompteLayoutViewComponent;
  let fixture: ComponentFixture<CompteLayoutViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompteLayoutViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteLayoutViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
