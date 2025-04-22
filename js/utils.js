const addElement = (id) => document.getElementById(id);
export const negativeValue = (value) => value < 0;
export const clearFields = () => addElement('value').value = '';

const toCurrency = (value) => value.toFixed(2).replace('.', ','); 

export const updateInterface = (gastos) =>{

    const categorias = gastos.categorias;
    
    categorias.forEach((categoria) => {
        const element = addElement(categoria.nome);
        element.textContent = `${categoria.nome}: R$ ${toCurrency(categoria.valor)}`;
    });

    const totalElement = addElement("Total");
    totalElement.textContent = `Total: R$ ${toCurrency(gastos.obterTotal())}`
}