export class EventQueue {
  private queue: any[] = [];

  enqueue(event: any): void {
    this.queue.push(event);
  }

  dequeue(): any {
    return this.queue.shift();
  }
}
