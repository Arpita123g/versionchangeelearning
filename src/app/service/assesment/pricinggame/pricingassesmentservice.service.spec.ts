import { TestBed } from '@angular/core/testing';

import { PricingassesmentserviceService } from './pricingassesmentservice.service';

describe('PricingassesmentserviceService', () => {
  let service: PricingassesmentserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PricingassesmentserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
