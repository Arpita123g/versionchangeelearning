import { TestBed } from '@angular/core/testing';

import { HrpassesmentserviceService } from './hrpassesmentservice.service';

describe('HrpassesmentserviceService', () => {
  let service: HrpassesmentserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HrpassesmentserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
