import {NegociacaoController} from "./controllers/negociacao-controller.js";
import {Negociacoes} from "./models/negociacoes.js";
import {Negociacao} from "./models/negociacao";

const controller = new NegociacaoController()
const form = document.querySelector('.form')
form.addEventListener('submit', (event: Event) => {
    event.preventDefault()
    controller.adiciona()
})

