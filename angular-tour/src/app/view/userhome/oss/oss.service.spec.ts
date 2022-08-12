import { TestBed } from '@angular/core/testing';

import { OssService } from './oss.service';

describe('OssService', () => {
  let service: OssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
