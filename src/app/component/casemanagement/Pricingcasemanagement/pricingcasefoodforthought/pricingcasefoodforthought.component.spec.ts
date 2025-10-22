import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingcasefoodforthoughtComponent } from './pricingcasefoodforthought.component';

describe('PricingcasefoodforthoughtComponent', () => {
  let component: PricingcasefoodforthoughtComponent;
  let fixture: ComponentFixture<PricingcasefoodforthoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingcasefoodforthoughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingcasefoodforthoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
