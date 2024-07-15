import { TestBed } from '@angular/core/testing';

import { FinmetaltableService } from './finmetaltable.service';

describe('FinmetaltableService', () => {
  let service: FinmetaltableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinmetaltableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
