export type ServiceFactory<T> = () => T;
export type ServiceProvider<T> = { provide: any; useClass: T };
