import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialcasestatementsComponent } from './financialcasestatements.component';

describe('FinancialcasestatementsComponent', () => {
  let component: FinancialcasestatementsComponent;
  let fixture: ComponentFixture<FinancialcasestatementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialcasestatementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialcasestatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
