export interface Middleware {
  process(request: any): any;
}

export interface MiddlewareConfig {
  enabled: boolean;
  priority: number;
}
