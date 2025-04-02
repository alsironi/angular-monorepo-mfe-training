import { TestBed } from '@angular/core/testing';
import { ConsolidatedApiService } from './consolidated-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ConsolidatedApiService', () => {
  let service: ConsolidatedApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ConsolidatedApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
