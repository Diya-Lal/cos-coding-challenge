import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endpoints } from 'src/app/config/configs';

@Injectable({
  providedIn: 'root'
})
export class AutionService {

  baseUrl = Endpoints.BASE_URL;
  constructor(private http: HttpClient) { }

  public getAuctions() {
    const autionsEndPoint = Endpoints.AUCTION_BUYER_ENDPOINT;
    const url = `${this.baseUrl}/${autionsEndPoint}`;
    let params = new HttpParams();
    params = params.append('count', false );
    params = params.append('filter', ' ');
    return this.http.get(url, {params: params});
  }
}
