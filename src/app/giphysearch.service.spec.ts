import { TestBed } from '@angular/core/testing';

import { GiphysearchService } from './giphysearch.service';

describe('GiphysearchService', () => {
  let service: GiphysearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GiphysearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
