interface DesenharPessoa{
    primeiroNome: string;
}

interface DesenharNinja extends DesenharPessoa{
    numerosDeEspada: number;
}

let ninja = {} as DesenharNinja
ninja.primeiroNome = "mateus"
ninja.numerosDeEspada = 2;