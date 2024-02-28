export class Negociacao {
    //* Pode ser removido para simplificar apenas com o constructor
    // private _data: Date; //Atributo privado
    // private _quantidade: number; //Atributo privado
    // private _valor: number; //Atributo privado
    constructor(_data, //Antes public readonly data: Date
    quantidade, // Antes private _quantidade: number
    valor // Antes private _number: number
    ) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
        //*Simplificado
        // this._data = data;
        // this._quantidade = quantidade;
        // this._valor = valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    //* Com o public readonly isso não é mais preciso
    //   get quantidade(): number {
    //     return this._quantidade;
    //   }
    //* Com o public readonly isso não é mais preciso
    //   get valor(): number {
    //     return this._valor;
    //   }
    //* Continua pois é para retornar uma operação.
    get volume() {
        return this.quantidade * this.valor;
    }
}
