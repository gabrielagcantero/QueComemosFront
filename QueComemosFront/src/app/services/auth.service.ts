import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';
import { StorageService } from './storage.service';
import { registrar, login } from './config.json';
import { map } from 'rxjs/operators';

export interface Credential {
  expirationInSec: number;
  token: string;
  email: string;
  rol: string;
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
    return this.http.post(`${env.url}/${registrar}`, usuario);
  }

  login(emailAndPass: any): Observable<any> {
    return this.http.post<Credential>(`${env.url}${login}`, emailAndPass)
    .pipe(map(credential => {
      if (credential && credential.token) {
        this.storageService.setItem('currentUser', JSON.stringify(credential));
        this.currentUserSubject.next(credential);
      }
      return credential;
    }));
  }

  logout(){
    this.storageService.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  isLoggedIn(): boolean {
    return this.currentUserValue !== null;
  }

  isLoggedAsAdmin(): boolean {
    if (this.isLoggedIn()) {
      return this.currentUserValue.rol === 'ADMINISTRADOR';
    }
    return false;
  }
}
