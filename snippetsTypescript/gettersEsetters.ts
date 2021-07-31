class Pessoa {
    private _nome: string = "setar Nome";
    get nome() {
        return `retorna o nome da nomeessoa '${this._nome}'.`;
    }
    set nome(receberNome: string) {
        if (receberNome === "") {
            this._nome = "sem nome";
        } else {
            this._nome = receberNome;
        }
    }
}
let mateus: Pessoa = new Pessoa();
console.log(mateus.nome);
mateus.nome = "mateus";
console.log(mateus.nome); 
mateus.nome = "";
console.log(mateus.nome); 