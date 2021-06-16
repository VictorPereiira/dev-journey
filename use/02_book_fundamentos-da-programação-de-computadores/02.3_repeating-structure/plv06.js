const assert = require('assert');

var calc = function (transaction) {
    let inCashValue = 0, onTimeValue = 0, amount, firstPortion;

    for (let i in transaction) {
        let obj = transaction[i];
        if (obj.cod === 'c') inCashValue += obj.tr;
        if (obj.cod === 't') onTimeValue += obj.tr;
    }

    amount = inCashValue + onTimeValue;
    firstPortion = Number((onTimeValue / 3).toFixed(2));
    return { inCashValue, onTimeValue, amount, firstPortion };
}

try {
    let res,
        transaction = [
            { cod: 'c', tr: 1 },
            { cod: 'c', tr: 1 },
            { cod: 't', tr: 2 },
            { cod: 't', tr: 2 },
            { cod: 'c', tr: 1 }
        ]

    // Test
    assert.strictEqual(res, calc(transaction));
} catch (error) {
    console.log(error);
}