import { TestBed } from '@angular/core/testing';
import { ApiVersioningService } from './versioning.service';

describe('ApiVersioningService', () => {
  let service: ApiVersioningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiVersioningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should return current version', () => {
    expect(service.getVersion()).toBe('v1');
  });
});
