import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalestargetreportComponent } from './salestargetreport.component';

describe('SalestargetreportComponent', () => {
  let component: SalestargetreportComponent;
  let fixture: ComponentFixture<SalestargetreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalestargetreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalestargetreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
