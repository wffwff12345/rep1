import { TestBed } from '@angular/core/testing';

import { NewseditorService } from './newseditor.service';

describe('NewseditorService', () => {
  let service: NewseditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewseditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
