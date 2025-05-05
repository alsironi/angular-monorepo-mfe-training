export interface ValidationResult {
  valid: boolean;
  errors: {[key: string]: any};
}
