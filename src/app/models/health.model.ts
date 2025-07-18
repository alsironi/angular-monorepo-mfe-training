export interface HealthStatus {
  status: 'healthy' | 'degraded' | 'unhealthy';
  checks: {[key: string]: boolean};
  timestamp: number;
}
