import { TestBed } from '@angular/core/testing';

import { CapitalbudgetsheetService } from './capitalbudgetsheet.service';

describe('CapitalbudgetsheetService', () => {
  let service: CapitalbudgetsheetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapitalbudgetsheetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
