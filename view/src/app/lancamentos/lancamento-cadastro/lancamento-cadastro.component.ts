import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css', './lancamento-cadastro.component.scss']
})
export class LancamentoCadastroComponent {
  tipos = [
    {label: 'Receita', value: 'RECEITA'},
    {label: 'Despesa', value: 'DESPESA'}
  ];

  Categorias = [
    {label: 'Alimentação', value: 1},
    {label: 'Transporte',  value: 2}
  ];

  Pessoas = [
    {label: 'Dayline de Sousa', value: 1},
    {label: 'Mikaella Arruda', value: 2},
    {label: 'Henrico Vilela', value: 3}
  ];

  constructor() { }

}
