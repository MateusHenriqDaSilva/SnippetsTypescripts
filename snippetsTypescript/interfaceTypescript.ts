interface desenharPessoa{
    primeiroNome: string;
    idade?: number;
}

function saudacao(pessoa: desenharPessoa){
    console.log(`Ola seja bem vindo ${pessoa.primeiroNome}`)
}