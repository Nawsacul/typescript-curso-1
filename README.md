### TypeScript: Parte 1 - Evoluindo seu JavaScript

#### Configuração Inicial e Ferramentas

- **Instalação de Dependências:** Utilize o comando `npm install` para instalar as dependências necessárias do projeto. Isso inclui ferramentas e bibliotecas que facilitam o desenvolvimento e teste do código.

- **Servidor HTTP e Live Server:** O projeto utiliza um servidor HTTP para servir os arquivos ao navegador, permitindo testar aplicações JavaScript e TypeScript. Em versões mais recentes, muitos desenvolvedores optam pelo Live Server, uma extensão do Visual Studio Code, por sua facilidade de uso e atualização automática da página ao modificar arquivos.

#### Pasta `dist` e ECMAScript 6

- **Pasta `dist`:** Abreviação de "distribution", é a pasta que contém os arquivos a serem servidos ao navegador. Para iniciar o servidor, um script chamado "server" está disponível no `package.json`. Comando: `npm run server`.

- **Sistema de Módulos ECMAScript 6:** A importação de módulos permite uma organização mais clara do código, eliminando a necessidade de múltiplas tags `<script>` em ordem específica. Isso facilita a manutenção e escalabilidade das aplicações.

### Class

Uma `class` é um modelo para criar objetos e implementar comportamentos e estados. Ela encapsula dados para o objeto (propriedades) e métodos para operar nesses dados. Classes suportam herança, permitindo que uma classe herde propriedades e métodos de outra classe.

- **Uso:** Utilizada para criar instâncias de objetos e definir características e comportamentos que esses objetos terão.
- **Características:** Suporta características orientadas a objetos como encapsulamento, herança e polimorfismo.
- **Exemplo:**

```typescript
class Pessoa {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    dizerNome(): void {
        console.log(`Nome: ${this.nome}`);
    }
}
```

### Interface

Uma `interface` é uma estrutura que define um contrato na sua aplicação. Ela declara a forma que um objeto deve ter, especificando um conjunto de propriedades, tipos e seus métodos sem implementações. Interfaces são usadas para definir tipos personalizados em TypeScript. Não são transpiladas para JavaScript; existem apenas em tempo de desenvolvimento para checagem de tipos.

- **Uso:** Utilizada para definir formas de estruturas de dados ou contratos de implementação para classes sem definir a implementação dos métodos.
- **Características:** Não pode definir a implementação de métodos. Pode ser estendida por outras interfaces ou classes.
- **Exemplo:**

```typescript
interface IPessoa {
    nome: string;
    dizerNome(): void;
}
```

### Type

Um `type` é uma definição de um tipo de dados que pode ser primitivo, união, interseção, tuplas, entre outros. É uma maneira poderosa e flexível de definir tipos em TypeScript. `type` pode ser usado para criar tipos complexos combinando tipos existentes.

- **Uso:** Utilizado para criar tipos personalizados ou aliases de tipos, facilitando a reutilização de estruturas de dados complexas.
- **Características:** Mais flexível que interfaces em alguns casos, como na definição de uniões ou interseções de tipos. Não suporta a declaração de métodos implementados.
- **Exemplo:**

```typescript
type PessoaType = {
    nome: string;
    dizerNome: () => void;
};
```

### Diferenças Chave

- **Classes:** São transpiladas para JavaScript e usadas para criar objetos com estados e comportamentos.
- **Interfaces:** Não são transpiladas para JavaScript; usadas para definir contratos de estrutura para objetos ou classes.
- **Types:** Podem definir uma variedade de formas de tipos, incluindo uniões e interseções, não se limitando apenas a estruturas de objetos.

#### JavaScript vs. TypeScript

Antes de mergulhar no TypeScript, é importante entender como o JavaScript lida com classes e módulos. No exemplo dado, a classe `Negociacao` é usada para representar uma negociação, seguindo regras de negócio específicas como imutabilidade dos atributos (data, quantidade e valor) e cálculo de volume.

- **Classes e Atributos Privados:** A sintaxe `#` indica um atributo privado, acessível apenas dentro da classe. Isso ajuda a garantir que os dados não sejam modificados indevidamente.

```javascript
class Negociacao {
    #data;
    #quantidade;
    #valor;

    constructor(data, quantidade, valor) {
        this.#data = data;
        this.#quantidade = quantidade;
        this.#valor = valor;
    }
}
```

- **Getters:** Para acessar valores dos atributos privados externamente, são utilizados getters. Eles permitem a leitura dos dados sem permitir alterações diretas, mantendo a integridade dos objetos.

```javascript
get data() {
    return this.#data;
}

get quantidade() {
    return this.#quantidade;
}

get valor() {
    return this.#valor;
}

get volume() {
    return this.#quantidade * this.#valor;
}
```

#### Considerações Importantes

- **Segurança em Runtime vs. Compile Time:** No JavaScript, erros como tentativas de modificação de atributos privados só são identificados em tempo de execução (runtime). Isso pode levar a bugs que só serão descobertos após o deploy. Aqui entra o TypeScript, que oferece verificação de tipos em tempo de compilação (compile time), ajudando a identificar problemas antes da execução do código.

### Complemento sobre TypeScript

O TypeScript é uma superset do JavaScript que adiciona tipos estáticos e outras funcionalidades poderosas, como interfaces e enums, melhorando a segurança e a previsibilidade do código. Ao transpilar o TypeScript para JavaScript, erros de tipo e acesso a propriedades inexistentes são capturados, reduzindo a chance de bugs em produção.

- **TypeScript e Imutabilidade:** TypeScript oferece mecanismos mais robustos para garantir a imutabilidade de objetos, como o uso de `readonly` para propriedades que não devem ser alteradas após a criação do objeto.

### Problemas Comuns no JavaScript e a Solução com TypeScript

#### Problemas Identificados

- **Atribuição Incorreta:** Erros de digitação ou entendimento, como `negociacao.quantidad = 10`, podem não ser capturados pelo JavaScript, levando a comportamentos inesperados sem erros explícitos.

- **Inicialização Parcial:** Criar uma instância de `Negociacao` sem passar todos os argumentos necessários (como apenas `new Date()`) resulta em valores `NaN` (Not a Number) para propriedades não inicializadas, sem indicação clara de erro.

#### TypeScript como Solução

- **Introdução ao TypeScript:** Uma superset do ECMAScript que adiciona tipos estáticos e outras funcionalidades para aumentar a robustez do código.

- **Atributos Privados:** O TypeScript sugere o uso do modificador `private` para definir atributos privados, diferentemente da sintaxe `#atributo` do JavaScript. Isso melhora a compatibilidade e a legibilidade do código.

```typescript
export class Negociacao {
    private _data: Date;
    private _quantidade: number;
    private _valor: number;

    constructor(data: Date, quantidade: number, valor: number) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    // Getters
    get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get volume() {
        return this._quantidade * this._valor;
    }
}
```

- **Tipagem Estrita:** Para evitar o uso implícito do tipo `any`, que pode levar a erros difíceis de rastrear, o TypeScript permite ativar a opção `noImplicitAny` no `tsconfig.json`. Isso obriga o desenvolvedor a especificar explicitamente o tipo de cada variável ou aceitar conscientemente o uso de `any`.

#### Complemento sobre Tipagem no TypeScript

- **Segurança de Tipo:** A tipagem estática do TypeScript ajuda a prevenir muitos erros comuns em JavaScript, fornecendo uma checagem de tipos em tempo de compilação. Isso significa que problemas como passar argumentos insuficientes para um construtor ou atribuir valores de tipos incompatíveis a uma variável são identificados antes da execução do código.

- **Tipos Explícitos vs. Implícitos:** Ao declarar variáveis, funções ou classes no TypeScript, você pode especificar tipos explicitamente (como `number`, `string`, `Date`, etc.) ou deixar o TypeScript inferir os tipos quando possível. A prática recomendada é utilizar tipos explícitos para aumentar a clareza e a prevenção de erros.

- **`any` vs. Tipos Estritos:** Enquanto o uso de `any` pode ser tentador para evitar erros de compilação relacionados à tipagem, ele anula muitos dos benefícios da tipagem estática. Portanto, recomenda-se limitar seu uso ao máximo, aplicando tipos mais específicos sempre que possível.

### Resumo do Conteúdo da Aula 3: Benefícios da tipagem estática

#### Tipagem Estrita em TypeScript

- **Evitando o Tipo `any`:** O TypeScript adota o tipo `any` implicitamente quando não especificamos o tipo de uma propriedade ou parâmetro. Isso reintroduz um dos principais problemas do JavaScript: a falta de segurança de tipo. A prática recomendada é sempre declarar explicitamente o tipo das propriedades de uma classe e dos parâmetros dos métodos para aproveitar a checagem de tipo do TypeScript.

- **`noImplicitAny`:** Para reforçar a declaração de tipos, é sugerido habilitar `noImplicitAny` no arquivo `tsconfig.json`. Isso obriga a especificação de tipos para todas as propriedades e parâmetros, aumentando a robustez do código ao evitar a adoção implícita do tipo `any`.

#### Inferência de Tipo

- **Inferência Automática de Tipo:** O TypeScript é capaz de inferir o tipo de uma variável baseado no valor atribuído a ela. Isso significa que, em muitos casos, não é necessário especificar o tipo explicitamente se ele pode ser inferido pelo valor atribuído.

- **Tipos em Construtores e Métodos:** Quando uma variável é inicializada no momento da criação de uma instância de classe, o TypeScript pode inferir seu tipo. No entanto, para propriedades que não são inicializadas no construtor, é necessário declarar o tipo explicitamente para evitar o uso implícito de `any`.

#### Declaração de Tipos em Métodos

- **Tipos de Retorno:** É uma boa prática especificar o tipo de retorno dos métodos. Isso não apenas melhora a legibilidade do código, mas também garante que o método retorne o tipo de dado esperado. Quando um método não retorna nenhum valor, o tipo `void` deve ser utilizado.

#### Refatoração e Limpeza do Código

- **Isolamento de Lógica:** Para manter o código limpo e legível, a lógica de criação de novas instâncias de objetos e a limpeza de formulários foram isoladas em métodos separados. Isso facilita a leitura e a manutenção do código.

# Anotações da Aula 4: TypeScript e Generics

## Contextualização

Em sistemas que exigem a manutenção da integridade dos dados ao longo do tempo, como um sistema de gerenciamento de negociações, é crucial adotar estratégias de programação que previnam alterações indesejadas nos dados. Uma dessas estratégias envolve o uso de estruturas de dados imutáveis para armazenar informações críticas.

## Implementação da Classe `Negociacoes`

A classe `Negociacoes` serve para encapsular uma coleção de negociações, garantindo que apenas operações seguras (como a adição de novas negociações) sejam permitidas.

### Desafio Inicial: Uso de `any[]`

Inicialmente, a tentativa de declarar uma lista sem especificar seu tipo levou ao uso de `any[]`, que é pouco seguro e não recomendado:

```typescript
export class Negociacoes {
  private negociacoes = [];
}
```

### Solução com Generics

Para resolver isso, aplicamos o conceito de Generics, especificando o tipo dos elementos que a lista pode conter:

```typescript
import { Negociacao } from "./negociacao";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];
}
```

## O Conceito de Generics

Generics são uma ferramenta de tipagem que permite a definição de componentes que podem trabalhar com diversos tipos, garantindo segurança de tipo. Eles são especialmente úteis em coleções, onde queremos especificar o tipo dos elementos que a coleção pode conter.

### Exemplo Prático de Generics

```typescript
const list: Array<string> = [];
list.push("10"); // Correto, é uma string.
list.push(11); // Incorreto, o TypeScript alertará que 11 não é uma string.
```

## Métodos da Classe `Negociacoes`

### Adicionando Negociações

O método `adiciona` permite adicionar um objeto do tipo `Negociacao` à lista:

```typescript
adiciona(negociacao: Negociacao): void {
  this.negociacoes.push(negociacao);
}
```

### Listando Negociações de Forma Segura

Para listar as negociações sem permitir modificações externas, usamos `ReadonlyArray<Negociacao>` ou a sintaxe abreviada `readonly Negociacao[]`:

```typescript
lista(): ReadonlyArray<Negociacao> {
  return this.negociacoes;
}
```

## Conclusão

O uso de Generics em TypeScript permite a criação de código mais seguro e reutilizável, garantindo a integridade dos dados em aplicações. A implementação da classe `Negociacoes` demonstra como estruturas de dados imutáveis e a segurança de tipo podem ser aplicadas para atender às regras de negócio específicas de um sistema.

# Aula 5: Simplificações e Programação Defensiva em TypeScript

## Simplificação na Declaração de Classes

### Arquivo `Negociacao.ts`

A classe `Negociacao` foi simplificada para usar a sintaxe mais concisa de TypeScript, que permite declarar e inicializar atributos diretamente nos parâmetros do construtor, eliminando a necessidade de declarações e atribuições explícitas.

#### Antes da Simplificação:

- Atributos privados com getters para acesso.
- Atribuição explícita dentro do construtor.

#### Após a Simplificação:

```typescript
export class Negociacao {
  constructor(
    public readonly data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}
  
  get volume(): number {
    return this.quantidade * this.valor;
  }
}
```

### Arquivo `Negociacoes.ts`

A classe `Negociacoes` encapsula uma coleção de `Negociacao`, oferecendo métodos para adicionar negociações e listar as existentes de forma segura.

```typescript
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
```

## Problema de Mutabilidade

Mesmo após a simplificação, um problema de design se manifesta: a mutabilidade indesejada de objetos `Date` dentro de `Negociacao`.

### Exemplo do Problema

- Atribuir uma nova data diretamente (`negociacao.data = new Date()`) é proibido.
- Modificar a data interna (`negociacao.data.setDate(12)`) é permitido, mas indesejado.

### Solução com Programação Defensiva

Para contornar o problema, adotamos a Programação Defensiva, garantindo que a classe `Negociacao` proteja seus atributos internos contra alterações indesejadas.

#### Implementação Defensiva:

```typescript
export class Negociacao {
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  get data(): Date {
    return new Date(this._data.getTime());
  }

  get volume(): number {
    return this.quantidade * this.valor;
  }
}
```

- A data agora é armazenada de forma privada (`_data`).
- O getter `data` retorna uma nova instância de `Date`, protegendo o objeto original de mutações.

## Conclusão

A simplificação na declaração de classes e a implementação de práticas de Programação Defensiva são essenciais para a criação de código mais seguro, legível e manutenível em TypeScript. Essas técnicas permitem que desenvolvedores protejam melhor os dados e a lógica de negócios de suas aplicações contra usos indevidos ou erros de programação.