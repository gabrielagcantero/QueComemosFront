import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';
import { StorageService } from './storage.service';
import { registrar, login } from './config.json';
import { map } from 'rxjs/operators';
import { UsuarioFoto } from '../models/usuario-foto-model';

export interface Credential {
  expirationInSec: number;
  token: string;
  email: string;
  rol: string;
  id: number;
}

@Injectable({
 providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<Credential | any>;
  public currentUser: Observable<Credential | any>;

  constructor(private http: HttpClient, private storageService: StorageService) {
    const currentStoredUser = JSON.parse(this.storageService.getItem('currentUser') || 'null') as Credential | null;
    this.currentUserSubject = new BehaviorSubject<any>(currentStoredUser);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Credential {
    return this.currentUserSubject.value;
}

  register(usuario: any): Observable<any> {
    return this.http.post(`${env.url}${registrar}`, usuario);
  }

  login(loginRequest: { email: string, clave: string }): Observable<Credential> {
    return this.http.post<any>(`${env.url}${login}`, loginRequest)
      .pipe(map(serverResponse => {
        // Mapeo explícito de los campos del servidor
        const mappedCredential: Credential = {
          token: serverResponse.token,
          expirationInSec: serverResponse.exp,
          email: serverResponse.username,
          rol: serverResponse.role,
          id: serverResponse.userid
        };
        
        this.storageService.setItem('currentUser', JSON.stringify(mappedCredential));
        this.currentUserSubject.next(mappedCredential);
        
        return mappedCredential;
      }));
  }

  logout(){
    this.storageService.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  isLoggedIn(): boolean {
    return this.currentUserValue !== null;
  }

  getUsuario() {
    return this.http.get<UsuarioFoto>(`${env.url}/usuarios/${this.currentUserValue.id}`);
  }
}
