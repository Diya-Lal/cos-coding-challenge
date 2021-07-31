import { TestBed } from '@angular/core/testing';

import { AutionService } from './auction.service';

describe('AutionService', () => {
  let service: AutionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
