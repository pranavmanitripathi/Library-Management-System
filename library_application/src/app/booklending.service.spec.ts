import { TestBed } from '@angular/core/testing';

import { BooklendingService } from './booklending.service';

describe('BooklendingService', () => {
  let service: BooklendingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooklendingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
