import { TestBed } from '@angular/core/testing';

import { NewinfoService } from './newinfo.service';

describe('NewinfoService', () => {
  let service: NewinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
