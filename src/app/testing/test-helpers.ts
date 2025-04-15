import { ComponentFixture } from '@angular/core/testing';

export function detectChanges<T>(fixture: ComponentFixture<T>): void {
  fixture.detectChanges();
}

export function getDebugElement<T>(fixture: ComponentFixture<T>) {
  return fixture.debugElement;
}
