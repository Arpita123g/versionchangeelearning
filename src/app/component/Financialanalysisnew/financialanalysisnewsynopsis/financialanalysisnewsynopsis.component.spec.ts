import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialanalysisnewsynopsisComponent } from './financialanalysisnewsynopsis.component';

describe('FinancialanalysisnewsynopsisComponent', () => {
  let component: FinancialanalysisnewsynopsisComponent;
  let fixture: ComponentFixture<FinancialanalysisnewsynopsisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialanalysisnewsynopsisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialanalysisnewsynopsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
