export const toPorcent = (valor) => {
    return valor / 100;
}

export const lucroLiquido = (valor, payout) => {
    return valor * payout;
}

export const lucroBruto = (valor, payout) => {
    return valor * (payout+1);
}

