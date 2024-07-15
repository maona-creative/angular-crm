import { TestBed } from '@angular/core/testing';

import { FinmetalService } from './finmetal.service';

describe('FinmetalService', () => {
  let service: FinmetalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinmetalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
