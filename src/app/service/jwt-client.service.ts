import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  constructor(private http: HttpClient) { }

  public generateToken(request){
    return this.http.post('http://localhost:8080/login', request, {observe : 'response'});
  }








}
