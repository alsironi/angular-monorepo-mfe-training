export interface Request {
  method: string;
  url: string;
  headers?: {[key: string]: string};
  body?: any;
}

export interface Response {
  status: number;
  data: any;
}
