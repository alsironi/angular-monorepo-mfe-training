export interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
}

export function createAnalyticsEvent(data: Partial<AnalyticsEvent>): AnalyticsEvent {
  return { category: '', action: '', ...data };
}
