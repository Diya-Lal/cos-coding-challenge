import { Injectable } from '@angular/core';
import { Endpoints } from 'src/app/config/configs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = Endpoints.BASE_URL;
  isLoggedIn: boolean = false;

  constructor(private http: HttpClient) { }

  public login(mailID:string, password:string) {
    const endpoint = Endpoints.AUTHENTICATION_ENDPOINT;
    const url =   `${this.baseUrl}/${endpoint}/${mailID}`;
    return this.http.put(url, {password})
  }

}
