import { PaginatorLancamento } from './model/paginatorLancamento.model';
import { OauthService } from './../seguranca/oauth.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import * as moment from 'moment';



export interface LancamentoFiltro{
  descricao: string;
  dataVencimentoInicio: Date;
  dataVencimentoFim: Date;
}


@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  lancamentoUrl = 'http://192.168.1.104:8080/lancamentos';

  headers: HttpHeaders = new HttpHeaders;
  constructor(
    private http: HttpClient,
    private oauthService: OauthService
  ) { }

  pesquisar(filtro: LancamentoFiltro): Observable<PaginatorLancamento>{
    let params = new HttpParams();

    this.setHeaders();

    if (filtro.descricao){
      params = params.set('descricao',filtro.descricao);
    }
    if (filtro.dataVencimentoInicio){
      params = params.set('dataVencimentoDe',moment(filtro.dataVencimentoInicio).format('YYYY-MM-DD'));
    }
    if (filtro.dataVencimentoInicio){
      params = params.set('dataVencimentoAte',moment(filtro.dataVencimentoFim).format('YYYY-MM-DD'));
    }

    if(!localStorage.getItem('token')){
      setTimeout(() => {
        return this.http.get<PaginatorLancamento>(`${this.lancamentoUrl}`,{'headers': this.headers, params});
      }, 100);
    }

    return this.http.get<PaginatorLancamento>(`${this.lancamentoUrl}`,{'headers': this.headers, params});
  }

  setHeaders(){

    if (localStorage.getItem('token')){
      this.headers = this.headers.set('Content-Type', 'application/json')
                                 .set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    }else{
      this.oauthService.login().subscribe(resp =>{
        this.oauthService.armazenarToken(JSON.parse(JSON.stringify(resp)).access_token);

        this.headers = this.headers.set('Content-Type', 'application/json')
                                   .set('Authorization',`Bearer ${localStorage.getItem('token')}`)
      },
      err =>{
        console.error(err);
      });
    }


  }
}
