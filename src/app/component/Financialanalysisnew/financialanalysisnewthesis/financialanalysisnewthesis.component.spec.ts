import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialanalysisnewthesisComponent } from './financialanalysisnewthesis.component';

describe('FinancialanalysisnewthesisComponent', () => {
  let component: FinancialanalysisnewthesisComponent;
  let fixture: ComponentFixture<FinancialanalysisnewthesisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialanalysisnewthesisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialanalysisnewthesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
