import { Negociacoes } from "./../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {

  //*  A razão deste template existir é que ele vai retornar uma string HTML, no futuro, com a HTML e os dados desejados, fundidos nesse HTML. Mas, por enquanto, só será retornado o HTML da tabela com o seu cabeçalho.
  template(model: Negociacoes): string {
    return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                ${model
                  .lista()
                  .map((negociacao) => {
                    return `
                        <tr>
                            <td>${negociacao.data.toLocaleDateString("pt-br", {
                              timeZone: "UTC",
                            })}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                        </tr>
                    `;
                  })
                  .join("")}
            </tbody>
        </table>   
    `;
  }
}
