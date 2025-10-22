import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingcaseinnovateComponent } from './pricingcaseinnovate.component';

describe('PricingcaseinnovateComponent', () => {
  let component: PricingcaseinnovateComponent;
  let fixture: ComponentFixture<PricingcaseinnovateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingcaseinnovateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingcaseinnovateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
