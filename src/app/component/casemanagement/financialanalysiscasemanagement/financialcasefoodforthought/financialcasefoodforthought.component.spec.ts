import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialcasefoodforthoughtComponent } from './financialcasefoodforthought.component';

describe('FinancialcasefoodforthoughtComponent', () => {
  let component: FinancialcasefoodforthoughtComponent;
  let fixture: ComponentFixture<FinancialcasefoodforthoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialcasefoodforthoughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialcasefoodforthoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
