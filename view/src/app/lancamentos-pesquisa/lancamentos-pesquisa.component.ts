import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css',  './app.tableresponsive.scss']
})
export class LancamentosPesquisaComponent {

  first = 0;
  rows = 10;
  lancamentos = [
    { tipo:"RECEITA", descricao:"Venda de Software", dataVencimento: "18/09/2020", dataPagamento: null, valor: 2500, pessoa: "Atacado Brasil"},
    { tipo:"DESPESA", descricao:"Compra de Pão", dataVencimento: "22/09/2020", dataPagamento: null, valor: 5.50, pessoa: "Padaria Tropical"},
    { tipo:"RECEITA", descricao:"Venda de Carro", dataVencimento: "30/09/2020", dataPagamento: null, valor: 25000, pessoa: "Garagem Brasil"},
    { tipo:"DESPESA", descricao:"Compra de ovos", dataVencimento: "20/10/2020", dataPagamento: "18/10/2020", valor: 12.75, pessoa: "Ovos Mantiqueiras"}
  ];

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
      this.first = this.first - this.rows;
  }

  reset() {
      this.first = 0;
  }

  isLastPage(): boolean {
      return this.lancamentos ? this.first === (this.lancamentos.length - this.rows) : true;
  }

  isFirstPage(): boolean {
      return this.lancamentos ? this.first === 0 : true;
  }


}
