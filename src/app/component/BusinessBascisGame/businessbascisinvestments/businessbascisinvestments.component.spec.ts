import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessbascisinvestmentsComponent } from './businessbascisinvestments.component';

describe('BusinessbascisinvestmentsComponent', () => {
  let component: BusinessbascisinvestmentsComponent;
  let fixture: ComponentFixture<BusinessbascisinvestmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessbascisinvestmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessbascisinvestmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
