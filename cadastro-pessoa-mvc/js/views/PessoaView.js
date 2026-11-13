export class PessoaView {
    #inputNome = document.getElementById('nome');
    #inputSobrenome = document.getElementById('sobrenome');
    #inputAnoNascimento = document.getElementById('anoNascimento');
    #btnCalcular = document.getElementById('btnCalcular');
    #divResultado = document.getElementById('resultado');

    obterDadosFormulario() {
        const nome = this.#inputNome.value.trim();
        const sobrenome = this.#inputSobrenome.value.trim();
        const anoNascimento = this.#inputAnoNascimento.value.trim();

        if (!nome || !sobrenome || !anoNascimento) {
            throw new Error('Por favor, preencha todos os campos.');
        }

        const anoNum = Number(anoNascimento);
        const anoAtual = new Date().getFullYear();

        if (isNaN(anoNum) || anoNum <= 1900 || anoNum > anoAtual) {
            throw new Error('Insira um ano de nascimento válido.');
        }

        return { nome, sobrenome, anoNascimento: anoNum };
    }

    exibirResultado(nomeCompleto, idade) {
        this.#divResultado.style.color = '#2e7d32';
        this.#divResultado.style.backgroundColor = '#e8f5e9';
        this.#divResultado.style.border = '1px solid #c8e6c9';
        this.#divResultado.style.padding = '10px';
        this.#divResultado.style.marginTop = '15px';
        this.#divResultado.textContent = `Olá, ${nomeCompleto}! A sua idade é ${idade} anos.`;
    }

    exibirErro(mensagem) {
        this.#divResultado.style.color = '#c62828';
        this.#divResultado.style.backgroundColor = '#ffebee';
        this.#divResultado.style.border = '1px solid #ffcdd2';
        this.#divResultado.style.padding = '10px';
        this.#divResultado.style.marginTop = '15px';
        this.#divResultado.textContent = mensagem;
    }

    aoClicarCalcular(handler) {
        this.#btnCalcular.addEventListener('click', handler);
    }
}