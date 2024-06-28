import { TestBed } from '@angular/core/testing';

import { WelderformsService } from './welderforms.service';

describe('WelderformsService', () => {
  let service: WelderformsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WelderformsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
