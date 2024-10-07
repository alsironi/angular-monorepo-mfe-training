export interface ProductReview {
  id: string;
  productId: string;
  author: string;
  rating: number;
  text: string;
  date: Date;
  helpful: number;
}
