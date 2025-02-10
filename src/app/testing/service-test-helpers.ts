export function createMockService(service: any): any {
  return jasmine.createSpyObj(service, Object.getOwnPropertyNames(Object.getPrototypeOf(service)));
}
