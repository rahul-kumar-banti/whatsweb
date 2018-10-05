import { TestBed } from '@angular/core/testing';

import { HomenotifyService } from './homenotify.service';

describe('HomenotifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomenotifyService = TestBed.get(HomenotifyService);
    expect(service).toBeTruthy();
  });
});
