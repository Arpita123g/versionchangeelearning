import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialanalysisnewfoodforthoughtComponent } from './financialanalysisnewfoodforthought.component';

describe('FinancialanalysisnewfoodforthoughtComponent', () => {
  let component: FinancialanalysisnewfoodforthoughtComponent;
  let fixture: ComponentFixture<FinancialanalysisnewfoodforthoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialanalysisnewfoodforthoughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialanalysisnewfoodforthoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
