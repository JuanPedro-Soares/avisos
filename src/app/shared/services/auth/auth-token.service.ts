import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { UserPayload } from '#core/interfaces/login.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthTokenService {
  private readonly tokenKey = 'auth_token';

  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  setToken(token: string | null): void {
    if (token) {
      localStorage.setItem(this.tokenKey, token);
    } else {
      localStorage.removeItem(this.tokenKey);
    }
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isValidToken(): boolean {
    const token = this.getToken();
    return !!token;
  }

  decodePayloadJWT(): UserPayload | null {
    const token = this.getToken();
    if (!token) {
      return null;
    }

    try {
      return jwtDecode(token);
    } catch (err) {
      return null;
    }
  }
}
