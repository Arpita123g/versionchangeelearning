import { TestBed } from '@angular/core/testing';

import { SnackbaralertService } from './snackbaralert.service';

describe('SnackbaralertService', () => {
  let service: SnackbaralertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnackbaralertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
