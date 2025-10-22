import { TestBed } from '@angular/core/testing';

import { LogisticsassesmentserviceService } from './logisticsassesmentservice.service';

describe('LogisticsassesmentserviceService', () => {
  let service: LogisticsassesmentserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogisticsassesmentserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
