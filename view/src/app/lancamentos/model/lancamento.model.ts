import { Pessoa } from './../../pessoas/model/pessoa.model';
import { Categoria } from './categoria.model';

export class Lancamento{
  lancamentoid: number;
  descricao?: string;
  dataVencimento?: Date;
  dataPagamento?: Date;
  valor?: number;
  observacao?: string;
  tipo?: string;

  categoria?: Categoria;
  pessoa?: Pessoa;
}
