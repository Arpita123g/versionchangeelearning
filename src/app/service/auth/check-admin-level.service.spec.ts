import { TestBed } from '@angular/core/testing';

import { CheckAdminLevelService } from './check-admin-level.service';

describe('CheckAdminLevelService', () => {
  let service: CheckAdminLevelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckAdminLevelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
