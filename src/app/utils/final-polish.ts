export function cleanupCode(): void {
  // Remove console.logs in production
  if (typeof window !== 'undefined') {
    if (!development) {
      console.log = () => {};
    }
  }
}

declare const development: boolean;
