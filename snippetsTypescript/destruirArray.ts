const addNumeros = (a?: number, b?: number): number => a + b;
const numeros: number[] = [ 5, 6 ];
console.log(addNumeros(...numeros));