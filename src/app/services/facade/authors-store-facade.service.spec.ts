import { TestBed } from '@angular/core/testing';

import { AuthorsStoreFacadeService } from './authors-store-facade.service';

describe('AuthorsStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthorsStoreFacadeService = TestBed.get(AuthorsStoreFacadeService);
    expect(service).toBeTruthy();
  });
});
