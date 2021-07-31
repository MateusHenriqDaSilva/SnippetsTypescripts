abstract class PlanetaBase {
    nome: string;
    circunferencia: number;
    constructor(receberNome: string, receberCircunferencia: number) {
        this.nome = receberNome;
        this.circunferencia = receberCircunferencia;
    }
    abstract buracoNegro(tamanhoCircunferencia: number): void;
    calcDiameter() {
        return this.circunferencia * 2;
    }
}