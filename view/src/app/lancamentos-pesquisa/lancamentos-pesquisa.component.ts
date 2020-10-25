import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css',  './app.tableresponsive.scss']
})
export class LancamentosPesquisaComponent implements OnInit{
  // tslint:disable: quotemark
  // tslint:disable: typedef


  br: any;
  lancamentos = [
    { tipo: "RECEITA", descricao: "Venda de Software", dataVencimento: "18/09/2020", dataPagamento: null, valor: 2500, pessoa: "Atacado Brasil"},
    { tipo: "DESPESA", descricao: "Compra de Pão", dataVencimento: "22/09/2020", dataPagamento: null, valor: 5.50, pessoa: "Padaria Tropical"},
    { tipo: "RECEITA", descricao: "Venda de Carro", dataVencimento: "30/09/2020", dataPagamento: null, valor: 25000, pessoa: "Garagem Brasil"},
    { tipo: "DESPESA", descricao: "Compra de ovos", dataVencimento: "20/10/2020", dataPagamento: "18/10/2020", valor: 12.75, pessoa: "Ovos Mantiqueiras"}
  ];
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
  }


}
