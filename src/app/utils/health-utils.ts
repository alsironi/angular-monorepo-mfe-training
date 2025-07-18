export function calculateHealthScore(checks: {[key: string]: boolean}): number {
  const values = Object.values(checks);
  const healthy = values.filter(v => v).length;
  return (healthy / values.length) * 100;
}
