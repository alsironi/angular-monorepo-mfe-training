export class SessionTracker {
  private sessionId: string;
  private startTime: number;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.startTime = Date.now();
  }

  private generateSessionId(): string {
    return `session_${Date.now()}`;
  }

  getSessionDuration(): number {
    return Date.now() - this.startTime;
  }
}
