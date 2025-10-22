import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingcasemoduleComponent } from './pricingcasemodule.component';

describe('PricingcasemoduleComponent', () => {
  let component: PricingcasemoduleComponent;
  let fixture: ComponentFixture<PricingcasemoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingcasemoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingcasemoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
