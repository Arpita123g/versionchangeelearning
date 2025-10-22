import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialanalysisnewstatementsComponent } from './financialanalysisnewstatements.component';

describe('FinancialanalysisnewstatementsComponent', () => {
  let component: FinancialanalysisnewstatementsComponent;
  let fixture: ComponentFixture<FinancialanalysisnewstatementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialanalysisnewstatementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialanalysisnewstatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
