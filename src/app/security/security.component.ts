import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {JwtClientService} from '../service/jwt-client.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  authRequest: any = {
    username: 'admin',
    password: 'admin'
  };

  accessToken: string;
  rezult = 'DENIED';
  visible = true;

  constructor(private service: JwtClientService) { }

  ngOnInit(): void {
    this.getAccessToken(this.authRequest);
  }


  public getAccessToken(requestBody){
    const response = this.service.generateToken(requestBody);
    response.subscribe((data: HttpResponse<any>) => {
      this.accessToken = data.headers.get('authorization');
      console.log(this.accessToken);
      console.log(data.status);

    });
  }

  public getWelcome(tkn){
    const welcome = this.service.getWelcome(tkn);
    return welcome.subscribe( (data: string) =>
    {this.rezult = data;
     console.log(this.rezult);


    } );
  }


  onClick() {
    this.getWelcome(this.accessToken);
   // if( this.rezult 'DENIED' ) {
    this.visible = false;
    // -}
  }
}
