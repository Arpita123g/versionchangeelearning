import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingsynopsisComponent } from './pricingsynopsis.component';

describe('PricingsynopsisComponent', () => {
  let component: PricingsynopsisComponent;
  let fixture: ComponentFixture<PricingsynopsisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingsynopsisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingsynopsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
