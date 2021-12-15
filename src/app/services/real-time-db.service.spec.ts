import { TestBed } from '@angular/core/testing';

import { RealTimeDBService } from './real-time-db.service';

describe('RealTimeDBService', () => {
  let service: RealTimeDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealTimeDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
