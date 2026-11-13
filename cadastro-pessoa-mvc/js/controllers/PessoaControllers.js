import { PessoaModel } from '../models/PessoaModel.js';

export class PessoaController {
    #model;
    #view;

    constructor(model, view) {
        this.#model = model;
        this.#view = view;

        this.#view.aoClicarCalcular(() => this.tratarCalculo());
    }

    tratarCalculo() {
        try {
            const dados = this.#view.obterDadosFormulario();
            this.#model = new PessoaModel(dados.nome, dados.sobrenome, dados.anoNascimento);
            const nomeCompleto = this.#model.obterNomeCompleto();
            const idade = this.#model.calcularIdade();
            this.#view.exibirResultado(nomeCompleto, idade);
        } catch (erro) {
            this.#view.exibirErro(erro.message);
        }
    }
}