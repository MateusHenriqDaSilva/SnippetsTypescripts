class Pessoa {
    private nome: string = "valor";
    protected idade: number;
    constructor(receberNome: string, receberIdade: number) {
        this.nome = receberNome;
        this.idade = receberIdade;
    }
    public mostrarNome() {
        console.log(this.nome);
    }
}

class TipoPessoa extends Pessoa {
    private pessoaFisica: boolean = true;
    constructor() {
        super("Mateus Henrique", 23);
    }
}
let Joana: Pessoa = new TipoPessoa();