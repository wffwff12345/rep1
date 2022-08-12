import { TestBed } from '@angular/core/testing';

import { PicturelistService } from './picturelist.service';

describe('PicturelistService', () => {
  let service: PicturelistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PicturelistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
