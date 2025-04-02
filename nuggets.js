const prompt = require('prompt-sync')()

const nuggets = prompt(`Qual a quantidade que você deseja de Nuggets? `);
const pacotes= {
        6: 0,
        9: 0,
        20: 0
    }

const calculaNuggets = (numeroPedido) => {
    const textoResposta = () => `Você pode comprar: 
        ${pacotes[6]} pacotes com 6 nuggets 
        ${pacotes[9]} pacotes com 9 nuggets 
        ${pacotes[20]} pacotes com 20 nuggets`;
    
    function subtracaoPorPacote (valorPorPacote) {
        numeroPedido -= valorPorPacote;
        pacotes[valorPorPacote]++; 
        if (numeroPedido === 0) return true;
    }

    while(numeroPedido >= 0){
        if (numeroPedido % 6 == 0 || numeroPedido % 6 == 20 || numeroPedido % 6 == 9){
            console.log(numeroPedido)
            if (subtracaoPorPacote(6)) return textoResposta();
            continue;
        }
        
        if (numeroPedido % 9 == 0 || numeroPedido % 9 == 6 || numeroPedido % 9 == 20){
            console.log(numeroPedido)
            if (subtracaoPorPacote(9)) return textoResposta();
            continue;
        }
        
        if (numeroPedido % 20 == 0 || numeroPedido % 20 == 9 || numeroPedido % 9 == 6) {
            console.log(numeroPedido)
            if (subtracaoPorPacote(20)) return textoResposta();
            continue;
        }

         else {
            numeroPedido = numeroPedido - 6;
            pacotes[6]++;
        }
    }

    if (numeroPedido < 6) return `Você não consegue comprar pacotes fechados pois serão: 
        ${pacotes[6]} pacotes com 6 nuggets,
        ${pacotes[9]} pacotes com 9 nuggets,
        ${pacotes[20]} pacotes com 20 nuggets,
        mas faltará ${Math.abs(numeroPedido)} nuggets`
}

console.log(calculaNuggets(nuggets));
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// FEITO POR EU
// const prompt = require('prompt-sync')()

// let nuggets = prompt(`Qual a quantidade que você deseja de Nuggets? `);

// const pacotes = {
//     6: 0,
//     9: 0,
//     20: 0,
// }


// function calculaNuggets(numeroPedido) {
//     const subtraindoNumero = (valordopacote) => {
//         numeroPedido = numeroPedido - valordopacote;
//         pacotes[valordopacote]++;

//         return numeroPedido === 0
//     }
    
//     while(numeroPedido >= 0){
//         if (numeroPedido % 6 == 0 && numeroPedido % 6 == 20 || numeroPedido % 6 == 9){
//             if (subtraindoNumero(6)) return true
//             continue;
//         }
//         if (numeroPedido % 9 == 0 || numeroPedido % 9 == 6 || numeroPedido % 9 == 20){
//             if (subtraindoNumero(9)) return true
//             continue;
//         }
//         if (numeroPedido % 20 == 0 || numeroPedido % 20 == 9 || numeroPedido % 9 == 6) {
//             if (subtraindoNumero(20)) return true
//             continue
//         } else {
//             numeroPedido = numeroPedido - 6;
//             pacotes[6]++;
//             console.log("menos 6 exclusivo", numeroPedido)
//         }
//     }
//     return !(numeroPedido < 6)
// }

// console.log(calculaNuggets(nuggets));