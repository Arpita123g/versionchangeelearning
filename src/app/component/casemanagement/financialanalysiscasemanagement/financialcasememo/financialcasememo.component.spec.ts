import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialcasememoComponent } from './financialcasememo.component';

describe('FinancialcasememoComponent', () => {
  let component: FinancialcasememoComponent;
  let fixture: ComponentFixture<FinancialcasememoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialcasememoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialcasememoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
