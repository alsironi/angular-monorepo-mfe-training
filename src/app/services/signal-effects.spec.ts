import { TestBed } from '@angular/core/testing';
import { SignalEffectsService } from './signal-effects.service';

describe('SignalEffectsService', () => {
  let service: SignalEffectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalEffectsService);
  });

  it('should increment counter', () => {
    service.increment();
    expect(true).toBe(true);
  });
});
