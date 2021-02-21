
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class OauthService {

  oauthTokenUrl = 'http://192.168.1.104:8080/oauth/token';

  JwtPayLoad: any;
  headers: HttpHeaders = new HttpHeaders();

  constructor(
    private http: HttpClient
  ) { this.carregaToken() }


  login(){
    const body = `username=dayline@algamoney.com&password=dayline1149&grant_type=password`;
    this.setHeaders();
    return this.http.post(`${this.oauthTokenUrl}`, body, {'headers': this.headers });
  }

  setHeaders(){

    this.headers = this.headers.set('Content-Type', 'application/x-www-form-urlencoded')
                               .set('Authorization','Basic QW5ndWxhcjpAbmd1bEByMA==');

  }

  armazenarToken(token: string){
    this.JwtPayLoad = jwtDecode(token);
    localStorage.setItem('token',token);
  }

  carregaToken(){
    const token = localStorage.getItem('token');
    if (token){
      this.armazenarToken(token);
    }
  }
}
