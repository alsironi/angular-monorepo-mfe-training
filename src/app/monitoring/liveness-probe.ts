export class LivenessProbe {
  isAlive(): boolean {
    return true;
  }

  getStatus(): string {
    return 'alive';
  }
}
