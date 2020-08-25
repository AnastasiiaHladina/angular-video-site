import { TestBed, async, inject } from '@angular/core/testing';

import { CheckIfAuthorizedGuard } from './check-if-authorized-guard.service';

describe('UnauthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckIfAuthorizedGuard],
    });
  });

  it('should ...', inject([CheckIfAuthorizedGuard], (guard: CheckIfAuthorizedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
