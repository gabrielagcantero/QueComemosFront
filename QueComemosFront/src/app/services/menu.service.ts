import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

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
}
