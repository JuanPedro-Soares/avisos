import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, finalize } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { AuthTokenService } from '#shared/services/auth/auth-token.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  hide = true;
  isLoading = false;
  email = new FormControl('', [Validators.required, Validators.email]);
  senha = new FormControl('', [Validators.required, Validators.minLength(8)]);
  returnUrl = '/';

  constructor(
    private router: Router,
    private authTokenService: AuthTokenService,
    private loginService: LoginService
  ) {
    this.returnUrl =
      this.router.parseUrl(this.router.url).queryParams['returnUrl'] || '/';
  }

  onLogin(email: string, senha: string): void {
    this.isLoading = true;
    if (email && senha) {
      const credentials = { email: email, senha: senha };

      this.loginService
        .login(credentials.email, credentials.senha)
        .pipe(
          catchError(error => {
            this.showLoginErrorAlert();
            throw error;
          }),
          finalize(() => {
            this.isLoading = false;
          })
        )
        .subscribe(response => {
          const token = response.token;
          this.authTokenService.setToken(token);

          if (!this.authTokenService.isValidToken()) {
            return;
          }

          this.router.navigateByUrl(this.returnUrl).then();
        });
    }
  }

  showLoginErrorAlert(): void {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Erro ao fazer login. Verifique suas credenciais.',
      confirmButtonColor: '#2F9E41',
    }).then();
  }

  onSubmit(): void {
    const emailValue = this.email.value;
    const passwordValue = this.senha.value;

    if (emailValue !== null && passwordValue !== null) {
      if (this.email.valid && this.senha.valid) {
        this.onLogin(emailValue, passwordValue);
      }
    } else {
      console.error('E-mail ou senha vazios');
    }
  }

  getErrorMessage(): string {
    const emailValue = this.email.value?.toString() ?? '';

    if (!emailValue) {
      return 'Insira um email válido.';
    }

    return this.email.hasError('email')
      ? 'Email inválido, ex: usuario@gmail.com.'
      : '';
  }

  getPasswordErrorMessage() {
    if (this.senha.hasError('required')) {
      return 'Insira uma senha válida.';
    }

    return this.senha.hasError('minlength')
      ? 'A senha deve ter pelo menos 8 caracteres.'
      : '';
  }
}
