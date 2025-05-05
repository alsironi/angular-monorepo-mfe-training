export interface FormConfig {
  name: string;
  controls: { [key: string]: any[] };
  submitUrl?: string;
}
