import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingcaseheaderComponent } from './pricingcaseheader.component';

describe('PricingcaseheaderComponent', () => {
  let component: PricingcaseheaderComponent;
  let fixture: ComponentFixture<PricingcaseheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingcaseheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingcaseheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
