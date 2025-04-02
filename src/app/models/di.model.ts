export interface ServiceConfig {
  token: any;
  useValue?: any;
  useFactory?: (...args: any[]) => any;
}
