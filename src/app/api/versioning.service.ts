import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ApiVersioningService {
  currentVersion = 'v1';
  supportedVersions = ['v1', 'v2'];
  
  getVersion(): string {
    return this.currentVersion;
  }
  
  isVersionSupported(version: string): boolean {
    return this.supportedVersions.includes(version);
  }
}
