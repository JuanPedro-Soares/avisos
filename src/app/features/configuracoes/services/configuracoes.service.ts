import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { Categoria } from '#core/interfaces/categoria.interface';
import { IConfiguracao } from '#core/interfaces/configuracoes.interface';

@Injectable({
  providedIn: 'root',
})
export class ConfiguracoesService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private readonly httpClient: HttpClient) {}


    getConfiguracoes(){
      return this.httpClient.get<IConfiguracao>(`${this.apiUrl}/configuracao`);
    }



  getAllCategorias(): Observable<Categoria[]> {
    return this.httpClient.get<Categoria[]>(`${this.apiUrl}/categorias`);
  }
  updateCategoria(
    categoriaId: number,
    categoriaData: FormData 
  ): Observable<Categoria> {
    return this.httpClient.put<Categoria>(
      `${this.apiUrl}/categorias/${categoriaId}`,
      categoriaData, 
     
    );
  }

  createCategoria(categoriaData:FormData ): Observable<Categoria> {
    return this.httpClient.post<Categoria>(
      `${this.apiUrl}/categorias`,
      categoriaData
    );
  }
  removeCategoria(id:number):Observable<number>{
    return this.httpClient.patch<number>(`${this.apiUrl}/categorias/remover/${id}`,id)
  }
}
