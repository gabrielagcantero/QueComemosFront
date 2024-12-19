import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getItems(): Observable<any> {
    return this.http.get<any>(`${env.url}/menues/listar`);
  }

  getMenuDelDia(): Observable<any>{
    return this.http.get<any>(`${env.url}/menues/listar`).pipe(
      map((menues: any) => menues.filter(
        (menu: any) => menu.fecha === new Date().toISOString().split('T')[0] && menu.esVegetariano === false)));
  }

  getMenuVeggie(): Observable<any>{
    return this.http.get<any>(`${env.url}/menues/listar`).pipe(
      map((menues: any) => menues.filter(
        (menu: any) => menu.fecha === new Date().toISOString().split('T')[0] && menu.esVegetariano === true)));
  }

  register(menu: any): Observable<any> {
    return this.http.post(`${env.url}/menues/registrar`, menu, { responseType: 'text' });
  }

  getMenuById(id: number): Observable<any> {
    return this.http.get<any>(`${env.url}/menues/listar`).pipe(
      map((menues: any) => menues.find((menu: any) => menu.id === id))
    );
  }


  // Método para editar un menú
  updateMenu(menu: any): Observable<any> {
    return this.http.put(`${env.url}/menues/editar`, menu, { responseType: 'text' });
  }

}
