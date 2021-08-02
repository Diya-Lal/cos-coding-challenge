import { Injectable } from '@angular/core';
import { Endpoints } from 'src/app/config/configs';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IRegisteredUser } from 'src/app/shared/models/RegisteredUser';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = Endpoints.BASE_URL;
  isLoggedIn: boolean = false;

  constructor(private http: HttpClient) { }

  public login(mailID:string, password:string): Observable<IRegisteredUser> {
    const endpoint = Endpoints.AUTHENTICATION_ENDPOINT;
    const url =   `${this.baseUrl}/${endpoint}/${mailID}`;
    return this.http.put<IRegisteredUser>(url, {password})
  }
}
