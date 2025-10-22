import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialcasemoduleComponent } from './financialcasemodule.component';

describe('FinancialcasemoduleComponent', () => {
  let component: FinancialcasemoduleComponent;
  let fixture: ComponentFixture<FinancialcasemoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialcasemoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialcasemoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
