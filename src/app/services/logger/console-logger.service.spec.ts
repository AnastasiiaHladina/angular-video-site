import { TestBed } from '@angular/core/testing';

import { ConsoleLoggerService } from './console-logger.service';

describe('LoggerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsoleLoggerService = TestBed.get(ConsoleLoggerService);
    expect(service).toBeTruthy();
  });
});
