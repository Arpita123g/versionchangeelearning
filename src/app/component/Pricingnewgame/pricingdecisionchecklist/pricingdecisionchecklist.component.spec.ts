import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingdecisionchecklistComponent } from './pricingdecisionchecklist.component';

describe('PricingdecisionchecklistComponent', () => {
  let component: PricingdecisionchecklistComponent;
  let fixture: ComponentFixture<PricingdecisionchecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingdecisionchecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingdecisionchecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
