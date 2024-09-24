import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HubService {
  private hubConnection: signalR.HubConnection;
  private readonly apiHubUrl = environment.apiHubUrl;

  constructor() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(this.apiHubUrl, {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets,
        withCredentials: false,
      })
      .withAutomaticReconnect()
      .build();
  }

  startConnection(): void {
    this.hubConnection.start().then(() => {
      console.log("Conexão iniciou!")
    }).catch(error => {
      console.error("Conexão falhou com erro: " + error.message);
      console.log("Reconectando em 5 segundos.")
      setTimeout(() => this.hubConnection.start(), 5000);
    });
  }

  avisosUpdate(callback: (message: string) => void): void {
    this.hubConnection.on('AvisosAtualizados', callback);
  }
  
  stopConnection(): void {
    this.hubConnection.stop().then(() => {
      console.log("Conexão parou!");
    }).catch((error => {
      console.error("Connection falhou ao parar com error:", error.message);
    }));
  }
}
