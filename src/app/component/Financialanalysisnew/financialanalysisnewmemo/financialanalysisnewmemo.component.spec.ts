import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialanalysisnewmemoComponent } from './financialanalysisnewmemo.component';

describe('FinancialanalysisnewmemoComponent', () => {
  let component: FinancialanalysisnewmemoComponent;
  let fixture: ComponentFixture<FinancialanalysisnewmemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialanalysisnewmemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialanalysisnewmemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
