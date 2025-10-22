import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingcasemarketComponent } from './pricingcasemarket.component';

describe('PricingcasemarketComponent', () => {
  let component: PricingcasemarketComponent;
  let fixture: ComponentFixture<PricingcasemarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingcasemarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingcasemarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
