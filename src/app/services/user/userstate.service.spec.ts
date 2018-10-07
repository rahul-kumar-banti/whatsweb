import { TestBed } from '@angular/core/testing';

import { UserstateService } from './userstate.service';

describe('UserstateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserstateService = TestBed.get(UserstateService);
    expect(service).toBeTruthy();
  });
});
