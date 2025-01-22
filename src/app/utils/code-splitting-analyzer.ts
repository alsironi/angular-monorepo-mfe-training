export function analyzeCodeSplitting(modules: any[]): { lazy: any[], eager: any[] } {
  return {
    lazy: modules.filter(m => m.lazy),
    eager: modules.filter(m => !m.lazy)
  };
}
