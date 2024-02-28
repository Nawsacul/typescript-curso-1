export class Negociacoes {
    constructor() {
        this.negociacoes = []; // Poderia ser Negociacao[] ao invés de Array<Negociacao>
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        //Poderia ser escrito como : readonly Negociacao[] ou, ao invés, utilizar o Spread Operator [...this.negociacoes];
        return this.negociacoes;
    }
}
