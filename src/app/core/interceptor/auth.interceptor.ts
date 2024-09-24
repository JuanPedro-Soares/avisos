import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { AuthTokenService } from '#shared/services/auth/auth-token.service';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private authTokenService: AuthTokenService,
    private router: Router
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.authTokenService.getToken();
    const request = token
      ? req.clone({
          setHeaders: { Authorization: `Bearer ${token}` },
        })
      : req;

    return next.handle(request).pipe(
      tap({
        error: (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status !== 401) {
              return;
            }

            this.authTokenService.removeToken();

            Swal.fire({
              position: 'center',
              title: 'Ops, sua sessão expirou',
              text: 'Você será redirecionado para página de login',
              showConfirmButton: false,
              timer: 2500,
              timerProgressBar: true,
            }).then(() => {
              this.router
                .navigate(['login'], {
                  queryParams: { returnUrl: this.router.url },
                })
                .then();
            });
          }
        },
      })
    );
  }
}
