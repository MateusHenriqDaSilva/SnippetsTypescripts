interface desenharPessoa {
    primeiroNome: string
    saudacao(): void
}

class Pessoa implements desenharPessoa{
    primeiroNome: string;
    constructor(desenharPrimeiroNome: string){
        this.primeiroNome = desenharPrimeiroNome 
    }
    saudacao(){
        console.log(`Ola, ${this.primeiroNome}`)
    }
}

const Leliane = new Pessoa("Leliane")
Leliane.saudacao();