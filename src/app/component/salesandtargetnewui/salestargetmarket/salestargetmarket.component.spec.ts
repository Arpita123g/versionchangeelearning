import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalestargetmarketComponent } from './salestargetmarket.component';

describe('SalestargetmarketComponent', () => {
  let component: SalestargetmarketComponent;
  let fixture: ComponentFixture<SalestargetmarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalestargetmarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalestargetmarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
