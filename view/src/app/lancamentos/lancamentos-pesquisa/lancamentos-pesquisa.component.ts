import { LancamentoFiltro, LancamentoService } from './../lancamento.service';
import { Component, OnInit } from '@angular/core';
import { Lancamento } from '../model/lancamento.model';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css',  './app.tableresponsive.scss']
})
export class LancamentosPesquisaComponent implements OnInit{
  // tslint:disable: quotemark
  // tslint:disable: typedef

  constructor(private lancamentoService: LancamentoService ){}

  br: any;
  lancamentos: Lancamento[];
  descricao: string;
  dataVencimentoInicio: Date;
  dataVencimentoFim: Date;
  rangeDates: Date[];

  ngOnInit() {
    this.br = {
      firstDayOfWeek: 0,
      dayNames: [ "domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado" ],
      dayNamesShort: [ "dom", "seg", "ter", "qua", "qui", "sex", "sáb" ],
      dayNamesMin: [ "D", "S", "T", "Q", "Q", "S", "S" ],
      monthNames: [ "Janeiro", "Fervereiro", "Março", "Abril", "Maio", "Junho",
                    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
                  ],
      monthNamesShort: [ "jan", "feb", "mar", "abr", "mai", "jun", "jul", "ago", "set", "ago", "nov", "dez" ],
      today: 'Hoje',
      clear: 'Vazio'
    };

    this.pesquisar();
  }

  pesquisar(){

    if(this.rangeDates){
      if(this.rangeDates[0]){
        this.dataVencimentoInicio = this.rangeDates[0];
      }
      if(this.rangeDates[1]){
        this.dataVencimentoFim    = this.rangeDates[1];
      }
    }

    const filtro: LancamentoFiltro = {
      descricao: this.descricao,
      dataVencimentoFim: this.dataVencimentoFim,
      dataVencimentoInicio: this.dataVencimentoInicio
    };
    this.lancamentoService.pesquisar(filtro).subscribe(result =>{
      this.lancamentos = result.content;
    });;
  }

}
