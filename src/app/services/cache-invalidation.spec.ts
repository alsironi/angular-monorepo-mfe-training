import { TestBed } from '@angular/core/testing';
import { CacheInvalidationService } from './cache-invalidation.service';

describe('CacheInvalidationService', () => {
  let service: CacheInvalidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CacheInvalidationService);
  });

  it('should invalidate cache', (done) => {
    service.invalidate$.subscribe(key => {
      expect(key).toBe('test');
      done();
    });
    service.invalidate('test');
  });
});
