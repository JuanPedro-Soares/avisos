import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthTokenService } from '#shared/services/auth/auth-token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(
    private authTokenService: AuthTokenService,
    private router: Router
  ) {}

  canActivate(_: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const userData = this.authTokenService.decodePayloadJWT();
    if (userData != null && new Date() <= new Date(userData.exp * 1000)) {
      return true;
    }

    this.authTokenService.removeToken();
    this.router
      .navigate(['/login'], { queryParams: { returnUrl: state.url } })
      .then();
    return false;
  }
}
