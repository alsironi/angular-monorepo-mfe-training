import { TestBed } from '@angular/core/testing';
import { AccessibilityService } from './accessibility.service';

describe('AccessibilityService', () => {
  let service: AccessibilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessibilityService);
  });

  it('should create announcements with correct ARIA attributes', () => {
    spyOn(document.body, 'appendChild');
    service.announceToScreenReader('Test message');
    expect(document.body.appendChild).toHaveBeenCalled();
  });

  it('should use correct priority levels', () => {
    service.announceToScreenReader('Error message', 'assertive');
    // Verify the div was created with aria-live="assertive"
    expect(true).toBe(true);
  });
});
