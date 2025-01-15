import { TestBed } from '@angular/core/testing';
import { EnhancedStore } from './enhanced.store';

describe('EnhancedStore', () => {
  let store: EnhancedStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    store = TestBed.inject(EnhancedStore);
  });

  it('should add items', () => {
    store.addItem({ id: 1 });
    expect(store.itemCount()).toBe(1);
  });
});
