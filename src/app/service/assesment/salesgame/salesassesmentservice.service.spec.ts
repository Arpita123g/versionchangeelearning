import { TestBed } from '@angular/core/testing';

import { SalesassesmentserviceService } from './salesassesmentservice.service';

describe('SalesassesmentserviceService', () => {
  let service: SalesassesmentserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesassesmentserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
