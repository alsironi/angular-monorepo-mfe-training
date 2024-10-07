export interface ValidationError {
  field: string;
  message: string;
  severity: 'error' | 'warning';
}

export interface CartValidationRules {
  minItems: number;
  maxItems: number;
  minQuantity: number;
  maxQuantity: number;
}
