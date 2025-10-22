import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialanalysisnewheaderComponent } from './financialanalysisnewheader.component';

describe('FinancialanalysisnewheaderComponent', () => {
  let component: FinancialanalysisnewheaderComponent;
  let fixture: ComponentFixture<FinancialanalysisnewheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialanalysisnewheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialanalysisnewheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
