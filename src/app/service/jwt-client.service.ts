import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  constructor(private http: HttpClient) { }

  public generateToken(request){
    return this.http.post('http://localhost:8080/login', request, {observe : 'response'});
  }

  public getWelcome(tkn){
    const headers = new HttpHeaders().set('Authorization', tkn);
    return this.http.get('http://localhost:8080/api/welcomepage', {headers, responseType: 'text'});
  }








}
