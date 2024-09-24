import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { UserPayload } from '#core/interfaces/login.interface';
import { AuthTokenService } from '#shared/services/auth/auth-token.service';

export const authAdminGuard: CanActivateFn = () => {
  const authToken = inject(AuthTokenService);

  const userData: UserPayload | null = authToken.decodePayloadJWT();
  if (!userData) {
    return false;
  }

  const expirationDate = new Date(userData.exp * 1000);
  if (new Date() > expirationDate) {
    return false;
  }

  return userData?.TipoUsuario === 'Administrador';
};
