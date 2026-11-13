export class PessoaModel {
    #nome;
    #sobrenome;
    #anoNascimento;

    constructor(nome, sobrenome, anoNascimento) {
        this.#nome = nome;
        this.#sobrenome = sobrenome;
        this.#anoNascimento = Number(anoNascimento);
    }

    obterNomeCompleto() {
        return `${this.#nome} ${this.#sobrenome}`;
    }

    calcularIdade() {
        const anoAtual = new Date().getFullYear();
        return anoAtual - this.#anoNascimento;
    }
}