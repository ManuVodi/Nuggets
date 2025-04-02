const prompt = require('prompt-sync')();

const nuggets = parseInt(prompt("Qual a quantidade que você deseja de Nuggets? "));

const calculaNuggets = (numeroPedido) => {
    const pacotes = { 6: 0, 9: 0, 20: 0 };
    
    while (numeroPedido > 0) {
        if (numeroPedido >= 20 && numeroPedido % 20 !== 6 && numeroPedido % 20 !== 9) {
            numeroPedido -= 20;
            pacotes[20]++;
        } else if (numeroPedido >= 9 && numeroPedido % 9 !== 6) {
            numeroPedido -= 9;
            pacotes[9]++;
        } else if (numeroPedido >= 6) {
            numeroPedido -= 6;
            pacotes[6]++;
        } else {
            break;
        }
    }

    if (numeroPedido === 0) {
        return `Você pode comprar: 
        ${pacotes[6]} pacotes com 6 nuggets 
        ${pacotes[9]} pacotes com 9 nuggets 
        ${pacotes[20]} pacotes com 20 nuggets`;
    }

    return `Não é possível comprar pacotes fechados exatos. O mais próximo possível é:
    ${pacotes[6]} pacotes com 6 nuggets
    ${pacotes[9]} pacotes com 9 nuggets
    ${pacotes[20]} pacotes com 20 nuggets
    e sobra ${Math.abs(numeroPedido)} nuggets.`;
};

console.log(calculaNuggets(nuggets));
