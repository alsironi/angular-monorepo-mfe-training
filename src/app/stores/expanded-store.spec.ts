import { TestBed } from '@angular/core/testing';
import { ExpandedStore } from './expanded-store';

describe('ExpandedStore', () => {
  let store: ExpandedStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    store = TestBed.inject(ExpandedStore);
  });

  it('should add items', () => {
    store.addItem({ id: 1 });
    expect(store.itemCount()).toBe(1);
  });
});
