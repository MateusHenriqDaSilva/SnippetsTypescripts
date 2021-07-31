const addNumeros = (...a: number[]): number =>
    a.reduce((acumular, receberValor) => acumular + receberValor);
const numeros: number[] = [5, 6];
alert(addNumeros(...numeros));