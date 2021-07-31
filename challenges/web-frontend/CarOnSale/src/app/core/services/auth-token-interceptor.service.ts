import { HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable()

export class AuthTokenInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthenticationService) { }

  intercept(req:any, next:any) {
    const authToken = this.authService.getToken();
    const userId = this.authService.getUserId();
    if(authToken && userId) {
      const headers = new HttpHeaders({
        authtoken: authToken,
        userid : userId
      })
      let tokenizedRequest = req.clone({headers});
      return next.handle(tokenizedRequest);
    } else {
      return next.handle(req.clone())
    }
  }
}
