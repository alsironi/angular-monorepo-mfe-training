import { of } from 'rxjs';

export class MockApiService {
  getProducts() { return of([]); }
  getUsers() { return of([]); }
}
