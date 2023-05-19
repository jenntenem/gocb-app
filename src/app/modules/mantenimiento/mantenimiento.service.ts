import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Response {
  codigo?: number | string;
  datos?: any;
  error?: boolean;
  message?: string;
}

@Injectable({
  providedIn: 'root',
})
export class MantenimientoService {
  URL_API = "http://localhost:8000/api"
  serviceProducts = 'products';
  serviceClients = 'clients';

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<Response> {
    const endPoint = `${this.URL_API}/${this.serviceProducts}/`;
    return this.httpClient.get(endPoint);
  }

  getClients(): Observable<Response> {
    const endPoint = `${this.URL_API}/${this.serviceClients}/`;
    return this.httpClient.get(endPoint);
  }
}
