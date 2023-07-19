import { TestBed } from '@angular/core/testing';

import { MovieseriesService } from './movieseries.service';

describe('MovieseriesService', () => {
  let service: MovieseriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieseriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
