export class Negociacao {
  //* Pode ser removido para simplificar apenas com o constructor
  // private _data: Date; //Atributo privado
  // private _quantidade: number; //Atributo privado
  // private _valor: number; //Atributo privado

  constructor(
    private _data: Date, //Antes public readonly data: Date
    public readonly quantidade: number, // Antes private _quantidade: number
    public readonly valor: number // Antes private _number: number
  ) {
    //*Simplificado
    // this._data = data;
    // this._quantidade = quantidade;
    // this._valor = valor;
  }

  get data(): Date {
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
  get volume(): number {
    return this.quantidade * this.valor;
  }
}
