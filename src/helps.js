export const toPercent = (value) => {
    return value / 100;
}

export const netProfit = (value, payout) => {
    return value * payout;
}

export const grossProfit = (value, payout) => {
    return value * (payout+1);
}

