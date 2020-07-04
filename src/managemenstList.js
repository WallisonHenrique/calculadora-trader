import calcManagement from './calcManagement';
import { netProfit, grossProfit, toPercent } from './helps';

var payout;

// atualiza valor baseado no payout
const recoverMoney = (value) => {
    return value / payout;
}

const managementsList = (config) => {
    const entry = config.entry;
    payout = toPercent(config.payout);
    config.payout = payout;
    
    // lógica dos gerenciamentos
    const soRecupera = () => calcManagement(config, 'Só recupera', (prev, applied) => {
        return recoverMoney(applied);
    });

    const martingale = () => calcManagement(config, 'Martingale', (prev) => {
        return prev * 2;
    });

    const martingaleC = () => calcManagement(config, 'Martingale Conservador', (prev, applied) => {
        return recoverMoney(applied + netProfit(entry, payout));
    });

    const castical = () => calcManagement(config, 'Castiçal', (prev) => {
        return (prev / .3) * .7;
    });

    // por favor, não excluir
    /*const castical2 = () => calcManagement(config, 'Castiçal 2.0', (prev, applied) => {
        return recoverMoney(applied + netProfit(applied, payout));
    });

    const casticalC = () => calcManagement(config, 'Ganha nas Anteriores', (prev, applied, listOfEntries) => {
        var initialProfit = entry * payout;
        return recoverMoney(initialProfit * listOfEntries.length + applied, payout);
    });*/

    const soros = () => calcManagement(config, 'Soros', (prev) => {
        return grossProfit(prev, payout);
    }, 'iAdd');

    return [soRecupera(), martingale(), martingaleC(), castical(), soros()];
}

export default managementsList;