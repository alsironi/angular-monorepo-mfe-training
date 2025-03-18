import { TestBed } from '@angular/core/testing';
import { PerformanceMonitorService } from './performance-monitor.service';

describe('PerformanceMonitorService', () => {
  let service: PerformanceMonitorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerformanceMonitorService);
  });

  it('should measure performance', () => {
    service.mark('start');
    const duration = service.measure('duration', 'start');
    expect(duration).toBeGreaterThanOrEqual(0);
  });
});
