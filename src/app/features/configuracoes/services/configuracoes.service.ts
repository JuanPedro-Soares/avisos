import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { Categoria } from '#core/interfaces/categoria.interfase';

@Injectable({
  providedIn: 'root',
})
export class ConfiguracoesService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}


  getAllCategorias(): Observable<Categoria[]> {
    return this.httpClient.get<Categoria[]>(`${this.apiUrl}/categorias`);
  }
  updateCategoria(
    categoriaId: number,
    categoriaData: FormData // Mudamos para FormData aqui
  ): Observable<Categoria> {
    return this.httpClient.put<Categoria>(
      `${this.apiUrl}/categorias/${categoriaId}`,
      categoriaData, // Envia o FormData
     
    );
  }

  removeCustomer(customerId: number): Observable<Categoria> {
    return this.httpClient.patch<Categoria>(
      `${this.apiUrl}/administradores/desativar/${customerId}`,
      customerId
    );
  }
}