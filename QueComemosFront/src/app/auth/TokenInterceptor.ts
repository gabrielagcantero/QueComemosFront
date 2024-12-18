import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { Credential } from '../services/auth.service';


export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

        const authService = inject(AuthService);
      
        const currentUser:Credential = authService.currentUserValue;
        console.log(currentUser);
        
        if (currentUser && currentUser.token) {
            let headers = req.headers
            .set('Authorization', `Bearer ${currentUser.token}`)
            .set('Access-Control-Allow-Origin', 'http://localhost:4200')
            .set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
            .set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
              
            const clonedReq = req.clone({
              headers
            });
            return next(clonedReq);
          }
          return next(req);
}