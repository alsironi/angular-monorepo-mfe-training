export interface CacheEntry {
  key: string;
  value: any;
  timestamp: number;
  ttl?: number;
}
