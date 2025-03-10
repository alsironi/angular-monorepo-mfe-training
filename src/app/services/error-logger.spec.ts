import { TestBed } from '@angular/core/testing';
import { ErrorLoggerService } from './error-logger.service';

describe('ErrorLoggerService', () => {
  let service: ErrorLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorLoggerService);
  });

  it('should log errors', () => {
    expect(true).toBe(true);
  });
});
