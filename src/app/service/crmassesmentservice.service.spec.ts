import { TestBed } from '@angular/core/testing';

import { CrmassesmentserviceService } from './crmassesmentservice.service';

describe('CrmassesmentserviceService', () => {
  let service: CrmassesmentserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrmassesmentserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
