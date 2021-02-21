import { Endereco } from './endereco.model';

export class Pessoa{
  pessoaid?: number;
  nome?: string;
  ativo: boolean;
  endereco?: Endereco;
}
