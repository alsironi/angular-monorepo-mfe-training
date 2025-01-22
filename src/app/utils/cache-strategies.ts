export enum CacheStrategy {
  LRU = 'lru',
  LFU = 'lfu',
  TTL = 'ttl'
}

export interface CacheOptions {
  strategy: CacheStrategy;
  ttl?: number;
}
