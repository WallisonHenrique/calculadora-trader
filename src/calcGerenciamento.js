import { lucroBruto, lucroLiquido } from './ajudas';

const calcEntradas = (entrada, entradas, calcEntrada) => {
    let novaEntrada = parseFloat(entrada),
    listaEntradas = [novaEntrada],
    aplicado = novaEntrada;

    for(var i=0;i<entradas-1;i++) {
        novaEntrada = calcEntrada(novaEntrada, aplicado, listaEntradas);
        aplicado += novaEntrada;
        listaEntradas.push(novaEntrada);
    }

    return {
        listaEntradas: listaEntradas,
        aplicado: aplicado,
        ultimaEntrada: listaEntradas[listaEntradas.length-1]
    };
}

const quantoAcresceu = (listaEntradas, payout) => {
    let acrescimo = 0, anterior = 0;
    for (let atual of listaEntradas) {
        const bruto = lucroBruto(anterior, payout);
        acrescimo += atual > bruto ? atual - bruto : 0;
        anterior = atual;
    }
    return acrescimo;
}

const calcGerenciamento = (config, titulo, calcEntrada, tipo='perdendo') => {
    const { entrada, entradas, payout } = config;
    const { listaEntradas, aplicado, ultimaEntrada } = calcEntradas(entrada, entradas, calcEntrada);
    let gasto = 0, lucro = 0;

    if (tipo == "perdendo") {
        lucro = lucroBruto(ultimaEntrada, payout) - aplicado;
        gasto = aplicado; 
    } else {
        const valorAcrescido = quantoAcresceu(listaEntradas, payout);
        lucro = lucroLiquido(aplicado, payout) - (valorAcrescido - entrada);
        gasto =  valorAcrescido;
    }
   
    return {
        titulo: titulo,
        listaEntradas: listaEntradas,
        gasto: gasto,
        lucro: lucro
    };
}

export default calcGerenciamento;