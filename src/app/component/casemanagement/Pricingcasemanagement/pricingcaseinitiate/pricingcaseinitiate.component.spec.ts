import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingcaseinitiateComponent } from './pricingcaseinitiate.component';

describe('PricingcaseinitiateComponent', () => {
  let component: PricingcaseinitiateComponent;
  let fixture: ComponentFixture<PricingcaseinitiateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingcaseinitiateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingcaseinitiateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
