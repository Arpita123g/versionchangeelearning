import { TestBed } from '@angular/core/testing';

import { CurrencychangeService } from './currencychange.service';

describe('CurrencychangeService', () => {
  let service: CurrencychangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencychangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
