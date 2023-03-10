export class Negociations {
    constructor() {
        this.negociations = []; // ARRAY DE NEGOCIAÇÃO COM GENERICS NEGOCIAÇAO
    }
    // METODOS PARA A NEGOCIAÇÕES 
    add(negociation) {
        this.negociations.push(negociation); //ADICIONA UMA NEGOCIAÇÃO A LISTA DE NEGOCIAÇOES
    }
    renderList() {
        return this.negociations; // RENDERIZA UM ARRAY DE NEGOCIAÇÕES  
    }
}
