export interface LoadBalancingConfig {
  strategy: 'roundRobin' | 'random' | 'leastConnections';
  healthCheck: boolean;
}
