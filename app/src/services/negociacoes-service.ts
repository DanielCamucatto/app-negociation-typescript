import { NegociacoesDoDia } from "../interfaces/negociacao-do-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacaoService {
    public obterNegociacaoDoDia(): Promise<Negociacao[]> {
        return fetch('http://localhost:8080/dados')
                .then(res => res.json())
                .then((dado: NegociacoesDoDia[]) => {
                    return dado.map(dadoDeHoje => {
                        return new Negociacao(
                            new Date(), 
                            dadoDeHoje.vezes, 
                            dadoDeHoje.montante
                        )
                    })
                })
    }
}
