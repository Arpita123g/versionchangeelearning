import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialcaseheaderComponent } from './financialcaseheader.component';

describe('FinancialcaseheaderComponent', () => {
  let component: FinancialcaseheaderComponent;
  let fixture: ComponentFixture<FinancialcaseheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialcaseheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialcaseheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
