export class MiddlewareChain {
  private middlewares: any[] = [];

  use(middleware: any): this {
    this.middlewares.push(middleware);
    return this;
  }

  execute(request: any): any {
    return this.middlewares.reduce((req, mw) => mw.process(req), request);
  }
}
