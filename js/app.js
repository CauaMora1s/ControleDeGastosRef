//modularizacao
import { Categoria,ListaGastosPorCategoria } from "./class.js";
import { negativeValue,updateInterface } from "./utils.js";

const gastos = new ListaGastosPorCategoria(
    new Categoria("Alimentação"),
    new Categoria("Transporte"),
    new Categoria("Lazer"),
    new Categoria("Outros")
)

const formulario = document.querySelector("form");

formulario.addEventListener("submit", (eventL) => {
    eventL.preventDefault();

    const informedValue = formulario.elements.valor.value;
    const InformedCategory = formulario.elements.categoria.value;

    if (negativeValue(informedValue)) {
        alert("Valor não pode ser negativo");
        return;
    }
    const category = gastos.obterCategoriaPorNome(InformedCategory);
    category.adicionarValor(informedValue);

    updateInterface(gastos);

    formulario.reset();
})

