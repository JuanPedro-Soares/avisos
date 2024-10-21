import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Categoria } from '#core/interfaces/categoria.interface';
import { IConfiguracao } from '#core/interfaces/configuracoes.interface';

@Injectable({
  providedIn: 'root',
})
export class ConfiguracoesService {
  private readonly apiUrl = environment.apiUrl;
  public readonly updateTableSubject = new BehaviorSubject<Categoria[]>([]);
  updateTable$ = this.updateTableSubject.asObservable();

  constructor(private readonly httpClient: HttpClient) {}

  getConfiguracoes() {
    return this.httpClient.get<IConfiguracao>(`${this.apiUrl}/configuracao`);
  }

  putConfiguracoes(form: any) {
    return this.httpClient.put<IConfiguracao>(`${this.apiUrl}/configuracao`, form);
  }

  getAllCategorias(): Observable<Categoria[]> {
    return this.httpClient.get<Categoria[]>(`${this.apiUrl}/categorias`).pipe(
      tap((categorias: Categoria[]) => {
        this.updateTableSubject.next(categorias);
      })
    );
  }

  updateCategoria(categoriaId: number, categoriaData: FormData): Observable<Categoria> {
    return this.httpClient.put<Categoria>(
      `${this.apiUrl}/categorias/${categoriaId}`,
      categoriaData
    ).pipe(
      tap(() => {
        this.getAllCategorias().subscribe();
      })
    );
  }

  createCategoria(categoriaData: FormData): Observable<Categoria> {
    return this.httpClient.post<Categoria>(
      `${this.apiUrl}/categorias`,
      categoriaData
    ).pipe(
      tap(() => {
        this.getAllCategorias().subscribe();
      })
    );
  }

  removeCategoria(id: number): Observable<number> {
    return this.httpClient.patch<number>(`${this.apiUrl}/categorias/remover/${id}`, id).pipe(
      tap(() => {
        this.getAllCategorias().subscribe();
      })
    );
  }
}
