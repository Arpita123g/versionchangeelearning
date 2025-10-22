import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialcaseinvestmentsComponent } from './financialcaseinvestments.component';

describe('FinancialcaseinvestmentsComponent', () => {
  let component: FinancialcaseinvestmentsComponent;
  let fixture: ComponentFixture<FinancialcaseinvestmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialcaseinvestmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialcaseinvestmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
