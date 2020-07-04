import { grossProfit, netProfit } from './helps';

const calcEntries = (entry, entries, calcEntry) => {
    let newEntry = parseFloat(entry),
    listOfEntries = [newEntry],
    applied = newEntry;

    for(var i=0;i<entries-1;i++) {
        newEntry = calcEntry(newEntry, applied, listOfEntries);
        applied += newEntry;
        listOfEntries.push(newEntry);
    }

    return {
        listOfEntries: listOfEntries,
        applied: applied,
        lastEntry: listOfEntries[listOfEntries.length-1]
    };
}

const getAddedValue = (listOfEntries, payout) => {
    let iAdd = 0, prev = 0;
    for (let current of listOfEntries) {
        const gross = grossProfit(prev, payout);
        iAdd += current > gross ? current - gross : 0;
        prev = current;
    }
    return iAdd;
}

const calcManagement = (config, title, calcEntry, category='toRecover') => {
    const { entry, entries, payout } = config;
    const { listOfEntries, applied, lastEntry } = calcEntries(entry, entries, calcEntry);
    let expense = 0, profit = 0;

    if (category === "toRecover") {
        profit = grossProfit(lastEntry, payout) - applied;
        expense = applied; 
    } else {
        const addedValue = getAddedValue(listOfEntries, payout);
        profit = netProfit(applied, payout) - (addedValue - entry);
        expense =  addedValue;
    }
   
    return {
        title: title,
        listOfEntries: listOfEntries,
        expense: expense,
        profit: profit
    };
}

export default calcManagement;