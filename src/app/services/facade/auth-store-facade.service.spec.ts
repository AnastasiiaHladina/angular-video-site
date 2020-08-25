import { TestBed } from '@angular/core/testing';

import { AuthStoreFacadeService } from './auth-store-facade.service';

describe('AuthStoreFacadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthStoreFacadeService = TestBed.get(AuthStoreFacadeService);
    expect(service).toBeTruthy();
  });
});
