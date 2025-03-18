import { TestBed } from '@angular/core/testing';
import { VirtualizationService } from './virtualization.service';

describe('VirtualizationService', () => {
  let service: VirtualizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VirtualizationService);
  });

  it('should calculate visible range', () => {
    const range = service.calculateVisibleRange(0, 500, 50);
    expect(range).toBeTruthy();
  });
});
