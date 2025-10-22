import { TestBed } from '@angular/core/testing';

import { ProductconsumerassesmentserviceService } from './productconsumerassesmentservice.service';

describe('ProductconsumerassesmentserviceService', () => {
  let service: ProductconsumerassesmentserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductconsumerassesmentserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
