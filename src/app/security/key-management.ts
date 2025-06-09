export class KeyManager {
  private keys: Map<string, CryptoKey> = new Map();

  async generateKey(name: string): Promise<CryptoKey> {
    const key = await window.crypto.subtle.generateKey(
      { name: 'AES-GCM', length: 256 },
      true,
      ['encrypt', 'decrypt']
    );
    this.keys.set(name, key as CryptoKey);
    return key as CryptoKey;
  }
}
