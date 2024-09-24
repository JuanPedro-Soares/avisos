import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { INews } from '#core/interfaces/news.interface';
import { environment } from 'src/environments/environment';
import { BuscarAvisos } from '#core/entities/busca/buscar-avisos';

@Injectable({
  providedIn: 'root',
})
export class NoticesService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  buscar(filtro: BuscarAvisos): Observable<INews[]> {
    const params = new HttpParams({
      fromObject: this.convertAnyToHttp(filtro),
    });

    return this.http.get<INews[]>(`${this.apiUrl}/avisos`, { params: params });
  }

  atualizarDados(id: number, data: Partial<INews>): Observable<INews> {
    return this.http.put<INews>(`${this.apiUrl}/avisos/${id}`, data);
  }

  getNotices(): Observable<INews[]> {
    return this.http.get<INews[]>(`${this.apiUrl}/obter-avisos`);
  }

  private convertAnyToHttp(params: any): {
    [param: string]: string | string[];
  } {
    params = Object.assign({}, params);
    Object.keys(params).forEach(key => {
      if (typeof params[key] === 'object') {
        params[key] = JSON.stringify(params[key]);
      } else if (!params[key]) {
        delete params[key];
      }
    });
    return params;
  }
}
