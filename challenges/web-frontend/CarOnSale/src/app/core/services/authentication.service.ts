import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  public isUserLoggedIn() {
    if(sessionStorage.getItem('authToken')){
      return true;
    } else {
      return false;
    }
    //return this.isLoggedIn;
  }
 
  public logout() {
    //this.isLoggedIn = false;
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('userId');
  }

  public getToken() {
   return sessionStorage.getItem('authToken');
  }

  public getUserId() {
    return sessionStorage.getItem('userId');
   }

}
