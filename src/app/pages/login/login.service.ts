import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { take } from 'rxjs/operators';

export interface Response {
  codigo?: number | string;
  datos?: any;
  error?: boolean;
  message?: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  URL_API = 'http://localhost:8000/api';
  service = 'users';

  constructor(private httpClient: HttpClient) {}

  login(data: any): Observable<Response> {
    const endPoint = `${this.URL_API}/${this.service}/login`;
    return this.httpClient.post(endPoint, data);
  }

  getRol(id_rol: string): Observable<Response> {
    const endPoint = `${this.URL_API}/rols/${id_rol}`;
    return this.httpClient.get(endPoint);
  }
}
