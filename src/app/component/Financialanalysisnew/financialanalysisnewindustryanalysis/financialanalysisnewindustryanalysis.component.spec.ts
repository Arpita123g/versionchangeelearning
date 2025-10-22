import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialanalysisnewindustryanalysisComponent } from './financialanalysisnewindustryanalysis.component';

describe('FinancialanalysisnewindustryanalysisComponent', () => {
  let component: FinancialanalysisnewindustryanalysisComponent;
  let fixture: ComponentFixture<FinancialanalysisnewindustryanalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialanalysisnewindustryanalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialanalysisnewindustryanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
