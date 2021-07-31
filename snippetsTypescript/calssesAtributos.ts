class Pessoa {
    private nome: string = "none";
    protected idade: number;
    constructor(receberNome: string, receberIdade: number) {
        this.nome = receberNome;
        this.idade = receberIdade;
    }
    public mostrarNome() {
        console.log(this.nome);
    }
}