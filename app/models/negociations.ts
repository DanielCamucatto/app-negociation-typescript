import { Negociation } from "./negociation.js"

export class Negociations {
    private negociations:Array<Negociation> = [] // ARRAY DE NEGOCIAÇÃO COM GENERICS NEGOCIAÇAO
    
    // METODOS PARA A NEGOCIAÇÕES 
    add(negociation: Negociation){ 
    this.negociations.push(negociation); //ADICIONA UMA NEGOCIAÇÃO A LISTA DE NEGOCIAÇOES
    }

    renderList():Array<Negociation> {
         return this.negociations; // RENDERIZA UM ARRAY DE NEGOCIAÇÕES 
   }
}