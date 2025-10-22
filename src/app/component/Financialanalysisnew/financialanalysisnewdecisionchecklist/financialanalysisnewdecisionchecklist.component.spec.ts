import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialanalysisnewdecisionchecklistComponent } from './financialanalysisnewdecisionchecklist.component';

describe('FinancialanalysisnewdecisionchecklistComponent', () => {
  let component: FinancialanalysisnewdecisionchecklistComponent;
  let fixture: ComponentFixture<FinancialanalysisnewdecisionchecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialanalysisnewdecisionchecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialanalysisnewdecisionchecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
