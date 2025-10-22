import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialanalysisnewinvestmentComponent } from './financialanalysisnewinvestment.component';

describe('FinancialanalysisnewinvestmentComponent', () => {
  let component: FinancialanalysisnewinvestmentComponent;
  let fixture: ComponentFixture<FinancialanalysisnewinvestmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialanalysisnewinvestmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialanalysisnewinvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
