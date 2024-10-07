export interface ProductRating {
  productId: string;
  userId: string;
  rating: number;
  review?: string;
  timestamp: Date;
}
