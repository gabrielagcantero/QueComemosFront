import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  constructor(private http: HttpClient) { }

  getItems(): Observable<any>{
    return this.http.get<any>(`${env.url}/pedidos/listar`)
  }

  getpedidoById(id: string): Observable<any> {
    return this.getItems().pipe(map((pedidos: any) => pedidos.find((pedido: any) => pedido.id === Number(id))));
  }

  register(pedido: any): Observable<any> {
    return this.http.post(`${env.url}/pedidos/registrar`, pedido, { responseType: 'text' });
  }

  update(pedido: any): Observable<any> {
    return this.http.put(`${env.url}/pedidos/editar`, pedido, { responseType: 'text' });
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
