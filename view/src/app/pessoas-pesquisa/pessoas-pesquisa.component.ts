import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css', './app.tableresponsive.scss']
})
export class PessoasPesquisaComponent {

  pessoas = [
    {
      "pessoaid": 1,
      "nome": "Maria",
      "ativo": true,
      "endereco": {
          "logradouro": "Casa",
          "numero": "89",
          "complemento": "Portão Branco",
          "bairro": "Alvorada",
          "cep": "78048473",
          "cidade": "Cuiaba",
          "estado": "Mato Grosso"
      }
  },
  {
      "pessoaid": 2,
      "nome": "Joaquin",
      "ativo": true,
      "endereco": {
          "logradouro": "Apartamento",
          "numero": "189",
          "complemento": "",
          "bairro": "Morada do ouro",
          "cep": "78048481",
          "cidade": "Cuiaba",
          "estado": "Mato Grosso"
      }
  },
  {
      "pessoaid": 3,
      "nome": "Junior",
      "ativo": false,
      "endereco": {
          "logradouro": "Casa",
          "numero": "55",
          "complemento": "Portão Azul",
          "bairro": "Coxipo",
          "cep": "78048873",
          "cidade": "Cuiaba",
          "estado": "Mato Grosso"
      }
  },
  {
      "pessoaid": 4,
      "nome": "Amanda",
      "ativo": true,
      "endereco": {
          "logradouro": "Casa",
          "numero": "78",
          "complemento": "Portão Verde",
          "bairro": "Novo Horizonte",
          "cep": "78620000",
          "cidade": "Barra do Garças",
          "estado": "Mato Grosso"
      }
  },
  {
      "pessoaid": 5,
      "nome": "Eliana Ribeiro Alves",
      "ativo": false,
      "endereco": {
          "logradouro": "Casa",
          "numero": "",
          "complemento": "",
          "bairro": "Paiaguas",
          "cep": "78600000",
          "cidade": "General Carneito",
          "estado": "Mato Grosso"
      }
  },
  {
      "pessoaid": 6,
      "nome": "Dayline",
      "ativo": true,
      "endereco": {
          "logradouro": "Apartamento",
          "numero": "888",
          "complemento": "",
          "bairro": "Jardim Florais",
          "cep": "78600000",
          "cidade": "Primavera",
          "estado": "Mato Grosso"
      }
  }
  ];

}
