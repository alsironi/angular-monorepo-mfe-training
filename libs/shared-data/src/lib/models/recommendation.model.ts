export interface ProductRecommendation {
  sourceProductId: string;
  recommendedProductId: string;
  score: number;
  reason: string;
}
