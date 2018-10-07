import { TestBed } from '@angular/core/testing';

import { StatusServicesService } from './status-services.service';

describe('StatusServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatusServicesService = TestBed.get(StatusServicesService);
    expect(service).toBeTruthy();
  });
});
