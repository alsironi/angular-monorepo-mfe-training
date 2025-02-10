import { TestBed } from '@angular/core/testing';
import { ApiVersioningService } from '../api/versioning.service';

describe('Services Unit Tests', () => {
  let service: ApiVersioningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiVersioningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
