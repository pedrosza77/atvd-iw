import { PessoaModel } from './models/PessoaModel.js';
import { PessoaView } from './views/PessoaView.js';
import { PessoaController } from './controllers/PessoaController.js';

document.addEventListener('DOMContentLoaded', () => {
    const model = new PessoaModel('', '', 2000);
    const view = new PessoaView();
    const controller = new PessoaController(model, view);
});