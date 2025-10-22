import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingadaptComponent } from './pricingadapt.component';

describe('PricingadaptComponent', () => {
  let component: PricingadaptComponent;
  let fixture: ComponentFixture<PricingadaptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingadaptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingadaptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
