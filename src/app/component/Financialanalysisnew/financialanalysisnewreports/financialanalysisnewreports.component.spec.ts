import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialanalysisnewreportsComponent } from './financialanalysisnewreports.component';

describe('FinancialanalysisnewreportsComponent', () => {
  let component: FinancialanalysisnewreportsComponent;
  let fixture: ComponentFixture<FinancialanalysisnewreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialanalysisnewreportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialanalysisnewreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
