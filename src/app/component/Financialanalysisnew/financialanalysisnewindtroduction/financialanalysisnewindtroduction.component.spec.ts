import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialanalysisnewindtroductionComponent } from './financialanalysisnewindtroduction.component';

describe('FinancialanalysisnewindtroductionComponent', () => {
  let component: FinancialanalysisnewindtroductionComponent;
  let fixture: ComponentFixture<FinancialanalysisnewindtroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialanalysisnewindtroductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialanalysisnewindtroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
