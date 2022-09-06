import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapCertifComponent } from './recap-certif.component';

describe('RecapCertifComponent', () => {
  let component: RecapCertifComponent;
  let fixture: ComponentFixture<RecapCertifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecapCertifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecapCertifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
