import { TestBed } from '@angular/core/testing';

import { SheetdataService } from './sheetdata.service';

describe('SheetdataService', () => {
  let service: SheetdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SheetdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
