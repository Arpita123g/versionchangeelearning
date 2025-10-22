import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingintroductionComponent } from './pricingintroduction.component';

describe('PricingintroductionComponent', () => {
  let component: PricingintroductionComponent;
  let fixture: ComponentFixture<PricingintroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingintroductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingintroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
