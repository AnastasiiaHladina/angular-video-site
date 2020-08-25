import { TestBed } from '@angular/core/testing';

import { GenreStoreFacadeService } from './genre-store-facade.service';

describe('GenreStoreFacadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenreStoreFacadeService = TestBed.get(GenreStoreFacadeService);
    expect(service).toBeTruthy();
  });
});
