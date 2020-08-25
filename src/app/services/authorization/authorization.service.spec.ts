import { TestBed } from '@angular/core/testing';

import { AutorizationService } from './authorization.service';

describe('AutorizationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutorizationService = TestBed.get(AutorizationService);
    expect(service).toBeTruthy();
  });
});
