export interface SearchParams {
  q: string;
  category?: string;
  sort?: 'price' | 'rating' | 'newest';
  page?: number;
}
