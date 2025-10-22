import { TestBed } from '@angular/core/testing';

import { CheckuserlevelService } from './checkuserlevel.service';

describe('CheckuserlevelService', () => {
  let service: CheckuserlevelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckuserlevelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
