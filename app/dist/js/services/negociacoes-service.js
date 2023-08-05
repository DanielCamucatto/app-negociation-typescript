import { Negociacao } from "../models/negociacao.js";
export class NegociacaoService {
    obterNegociacaoDoDia() {
        return fetch('http://localhost:8080/dados')
            .then(res => res.json())
            .then((dado) => {
            return dado.map(dadoDeHoje => {
                return new Negociacao(new Date(), dadoDeHoje.vezes, dadoDeHoje.montante);
            });
        });
    }
}
