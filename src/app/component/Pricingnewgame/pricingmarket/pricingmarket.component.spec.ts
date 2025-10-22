import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingmarketComponent } from './pricingmarket.component';

describe('PricingmarketComponent', () => {
  let component: PricingmarketComponent;
  let fixture: ComponentFixture<PricingmarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingmarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingmarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
