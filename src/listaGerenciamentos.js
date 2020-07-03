import calcGerenciamento from './calcGerenciamento';
import { lucroLiquido, lucroBruto } from './ajudas';

var payout;

const paraPorcentagem = (valor) => {
    return valor / 100;
}

// atualiza valor baseado no payout
const recuperar = (valor) => {
    return valor / payout;
}


const listaGerenciamentos = (config) => {
    const entrada = config.entrada;
    payout = paraPorcentagem(config.payout);
    config.payout = payout;
    
    // lógica dos gerenciamentos
    const soRecupera = () => calcGerenciamento(config, 'Só recupera', (anterior, aplicado) => {
        return recuperar(aplicado);
    });

    const martingale = () => calcGerenciamento(config, 'Martingale', (anterior) => {
        return anterior * 2;
    });

    const martingaleC = () => calcGerenciamento(config, 'Martingale Conservador', (anterior, aplicado) => {
        return recuperar(aplicado + lucroLiquido(entrada, payout));
    });

    const castical = () => calcGerenciamento(config, 'Castiçal', (anterior, aplicado) => {
        return (anterior / .3) * .7;
    });

    const castical2 = () => calcGerenciamento(config, 'Castiçal 2.0', (anterior, aplicado) => {
        return recuperar(aplicado + lucroLiquido(aplicado, payout));
    });

    const casticalC = () => calcGerenciamento(config, 'Ganha nas Anteriores', (anterior, aplicado, listaEntradas) => {
        var lucroInicial = entrada * payout;
        return recuperar(lucroInicial * listaEntradas.length + aplicado, payout);
    });

    const soros = () => calcGerenciamento(config, 'Soros', (anterior, aplicado) => {
        return lucroBruto(anterior, payout);
    }, 'acrescimo');

    

    return [soRecupera(), martingale(), martingaleC(), castical(), soros()];
}

export default listaGerenciamentos;