import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialcaseindustryanalysisComponent } from './financialcaseindustryanalysis.component';

describe('FinancialcaseindustryanalysisComponent', () => {
  let component: FinancialcaseindustryanalysisComponent;
  let fixture: ComponentFixture<FinancialcaseindustryanalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialcaseindustryanalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialcaseindustryanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
