import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricinginitiateComponent } from './pricinginitiate.component';

describe('PricinginitiateComponent', () => {
  let component: PricinginitiateComponent;
  let fixture: ComponentFixture<PricinginitiateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricinginitiateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricinginitiateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
