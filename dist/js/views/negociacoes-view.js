export class NegociacoesView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    //*  A razão deste template existir é que ele vai retornar uma string HTML, no futuro, com a HTML e os dados desejados, fundidos nesse HTML. Mas, por enquanto, só será retornado o HTML da tabela com o seu cabeçalho.
    template(model) {
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
    update(model) {
        const template = this.template(model);
        console.log(template);
        this.elemento.innerHTML = template;
    }
}
