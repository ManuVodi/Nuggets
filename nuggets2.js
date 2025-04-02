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

    function verificaResto(divisivel, resto, pacotes) {
        if(numeroPedido % divisivel == resto){
            if(subtracaoPorPacote(pacotes)) return textoResposta();
        }
    }

    while(numeroPedido >= 0){
        // if(verificaResto(20, 0, 20)) continue; 
        // if(verificaResto(20, 6, 6)) continue;
        // if(verificaResto(20, 9, 9)) continue;
        // if(verificaResto(9, 0, 9)) continue;
        // if(verificaResto(9, 6, 6)) continue;
        // if(verificaResto(9, 20, 20)) continue;
        // if(verificaResto(6, 0, 6)) continue;
        // if(verificaResto(6, 9, 9)) continue;
        // if(verificaResto(6, 20, 20)) continue;

        if (numeroPedido % 20 == 0) {
            if (subtracaoPorPacote(20)) return textoResposta();
            continue;
        }
        if(numeroPedido % 20 == 6){
            if (subtracaoPorPacote(6)) return textoResposta();
            continue;
        }
        if(numeroPedido % 20 == 9){
            if (subtracaoPorPacote(9)) return textoResposta();
            continue;
        }
        if (numeroPedido % 9 == 0){
            if (subtracaoPorPacote(9)) return textoResposta();
            continue;
        }
        if(numeroPedido % 9 == 6){
            if (subtracaoPorPacote(6)) return textoResposta();
            continue;
        }
        if(numeroPedido % 9 == 20){
            if (subtracaoPorPacote(20)) return textoResposta();
            continue;
        }
        if (numeroPedido % 6 == 0){
            if (subtracaoPorPacote(6)) return textoResposta();
            continue;
        }
        if(numeroPedido % 6 == 9){
            if (subtracaoPorPacote(9)) return textoResposta();
            continue;
        }
        if(numeroPedido % 6 == 20) {
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
        mas sobrará ${Math.abs(numeroPedido)} nuggets`
}

console.log(calculaNuggets(nuggets));