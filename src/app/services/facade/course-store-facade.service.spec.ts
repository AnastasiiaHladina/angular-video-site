import { TestBed } from '@angular/core/testing';

import { CourseStoreFacadeService } from './course-store-facade.service';

describe('StoreFacadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseStoreFacadeService = TestBed.get(CourseStoreFacadeService);
    expect(service).toBeTruthy();
  });
});
