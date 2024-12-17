import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetFoodsService {

  constructor(private http: HttpClient) { }

  getItems(){
    this.http.get(`${env.url}/comidas/listar`).subscribe(data => {console.log(data);});
  }
}
