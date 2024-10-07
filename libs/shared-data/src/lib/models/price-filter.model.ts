export interface PriceRange {
  min: number;
  max: number;
}

export interface PriceFilterState {
  range: PriceRange;
  isActive: boolean;
}
