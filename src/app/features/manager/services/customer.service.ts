import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomer } from '#core/interfaces/customer.interface';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  saveCustomer(customerData: ICustomer): Observable<ICustomer> {
    return this.httpClient.post<ICustomer>(
      `${this.apiUrl}/administradores`,
      customerData
    );
  }

  getAllCustomers(): Observable<ICustomer[]> {
    return this.httpClient.get<ICustomer[]>(`${this.apiUrl}/administradores`);
  }

  updateCustomer(
    customerId: number,
    customerData: Partial<ICustomer>
  ): Observable<ICustomer> {
    return this.httpClient.put<ICustomer>(
      `${this.apiUrl}/administradores/${customerId}`,
      customerData
    );
  }

  removeCustomer(customerId: number): Observable<ICustomer> {
    return this.httpClient.patch<ICustomer>(
      `${this.apiUrl}/administradores/desativar/${customerId}`,
      customerId
    );
  }
}
