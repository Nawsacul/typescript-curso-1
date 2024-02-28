import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private negociacoes: Array<Negociacao> = []; // Poderia ser Negociacao[] ao invés de Array<Negociacao>

  adiciona(negociacao: Negociacao): void {
    this.negociacoes.push(negociacao);
  }

  lista(): ReadonlyArray<Negociacao> {
    //Poderia ser escrito como : readonly Negociacao[] ou, ao invés, utilizar o Spread Operator [...this.negociacoes];
    return this.negociacoes;
  }
}
