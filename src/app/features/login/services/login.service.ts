import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILogin } from '#core/interfaces/login.interface';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<ILogin> {
    const loginUrl = `${this.apiUrl}/administradores-auth`;
    const credentials = { email: email, senha: password };

    // Realiza a autenticação e obtém o token
    return this.http.post<ILogin>(loginUrl, credentials);
  }
}
