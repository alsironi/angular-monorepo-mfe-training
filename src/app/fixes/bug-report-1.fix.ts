// Bug: Race condition in state update
// Fix: Use proper RxJS operators to ensure sequential updates
// Impact: Prevents duplicate data

export const FIX_RACE_CONDITION = {
  before: 'state.next(newValue); state.next(anotherValue);',
  after: 'state$ = combineLatest([source1$, source2$])'
};
