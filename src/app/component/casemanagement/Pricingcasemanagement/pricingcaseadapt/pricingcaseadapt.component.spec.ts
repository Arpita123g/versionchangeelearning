import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingcaseadaptComponent } from './pricingcaseadapt.component';

describe('PricingcaseadaptComponent', () => {
  let component: PricingcaseadaptComponent;
  let fixture: ComponentFixture<PricingcaseadaptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingcaseadaptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingcaseadaptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
