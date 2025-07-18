import { TestBed } from '@angular/core/testing';
import { HealthCheckService } from './health-check.service';

describe('HealthCheckService', () => {
  let service: HealthCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthCheckService);
  });

  it('should check health', async () => {
    const health = await service.checkHealth();
    expect(health.status).toBe('healthy');
  });
});
