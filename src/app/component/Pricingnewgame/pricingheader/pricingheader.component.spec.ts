import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingheaderComponent } from './pricingheader.component';

describe('PricingheaderComponent', () => {
  let component: PricingheaderComponent;
  let fixture: ComponentFixture<PricingheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
