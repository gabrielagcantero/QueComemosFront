import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FoodsService {

  constructor(private http: HttpClient) { }

  getItems(): Observable<any>{
    return this.http.get<any>(`${env.url}/comidas/listar`);
  }

  getEntradas(): Observable<any>{
    return this.getItems().pipe(map((comidas: any) => comidas.filter((comida: any) => comida.categoria === 'ENTRADA')));
  }

  getPrincipales(): Observable<any>{
    return this.getItems().pipe(map((comidas: any) => comidas.filter((comida: any) => comida.categoria === 'PLATO_PRINCIPAL')));
  }

  getPostres(): Observable<any>{
    return this.getItems().pipe(map((comidas: any) => comidas.filter((comida: any) => comida.categoria === 'POSTRE')));
  }

  getBebidas(): Observable<any>{
    return this.getItems().pipe(map((comidas: any) => comidas.filter((comida: any) => comida.categoria === 'BEBIDA')));
  }

  register(comida: any): Observable<any> {
    return this.http.post(`${env.url}/comidas/registrar`, comida, { responseType: 'text' });
  }

  update(comida: any): Observable<any> {
    return this.http.put(`${env.url}/comidas/editar`, comida, { responseType: 'text' });
  }
}
