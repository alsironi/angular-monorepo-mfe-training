import { TestBed } from '@angular/core/testing';
import { EncryptionService } from './encryption.service';

describe('EncryptionService', () => {
  let service: EncryptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncryptionService);
  });

  it('should encrypt/decrypt', () => {
    const data = 'test';
    const encrypted = service.encrypt(data);
    const decrypted = service.decrypt(encrypted);
    expect(decrypted).toBe(data);
  });
});
