interface desenharPessoa {
    primeiroNome: string;
    saudar(outraPessoa: string): string;
};
const pessoa = {
    primeiroNome: "Pedro",
    saudar(outraPessoa: string) {
        return `bom dia, ${this.primeiroNome} ${outraPessoa}`;
    }
};
function saudacao(pessoaNova: desenharPessoa) {
    console.log(pessoaNova.saudar("cleber"));
}
saudacao(pessoa)