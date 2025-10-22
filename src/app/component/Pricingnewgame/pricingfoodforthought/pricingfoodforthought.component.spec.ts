import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingfoodforthoughtComponent } from './pricingfoodforthought.component';

describe('PricingfoodforthoughtComponent', () => {
  let component: PricingfoodforthoughtComponent;
  let fixture: ComponentFixture<PricingfoodforthoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingfoodforthoughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingfoodforthoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
