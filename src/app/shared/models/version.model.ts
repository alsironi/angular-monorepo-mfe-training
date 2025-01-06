export interface ApiVersion {
  version: string;
  deprecated: boolean;
  endpoints: string[];
  releaseDate: Date;
}
