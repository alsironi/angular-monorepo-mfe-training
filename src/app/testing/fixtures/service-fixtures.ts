export class MockApiService {
  getUsers() { return Promise.resolve([]); }
  getProducts() { return Promise.resolve([]); }
}
