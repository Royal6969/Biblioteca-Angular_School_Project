import { TestBed } from '@angular/core/testing';

import { ClienteV2Service } from './cliente-v2.service';

describe('ClienteV2Service', () => {
  let service: ClienteV2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteV2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
