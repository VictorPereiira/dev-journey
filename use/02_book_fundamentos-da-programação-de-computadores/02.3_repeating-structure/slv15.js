const assert = require('assert');

var calc = function (obj) {
    let storageCost, rate, endPrice, rank,
        storeAll = 0, rateAll = 0, averageSC, averageRate,
        upEndPrice = 0, lessEndPrice = 0,
        countCheap = 0, countNormal = 0, countExpensive = 0,
        outlay, all, unit = []

    for (let i in obj) {
        let unitPrice = obj[i].unitPrice,
            refrigeration = obj[i].refrigeration,
            category = obj[i].category;

        if (unitPrice <= 20) {
            if (category === 'A') storageCost = 2;
            if (category === 'L') storageCost = 3;
            if (category === 'V') storageCost = 4;
        }

        if (unitPrice > 20 && unitPrice <= 50) {
            if (refrigeration === 'S') storageCost = 6;
            if (refrigeration === 'N') storageCost = 0;
        }

        if (unitPrice > 50) {
            if (refrigeration === 'S') {
                if (category === 'A') storageCost = 5;
                if (category === 'L') storageCost = 2;
                if (category === 'V') storageCost = 4;
            }
            if (refrigeration === 'N') {
                if (category === 'A' || category === 'V') storageCost = 0;
                if (category === 'L') storageCost = 1;
            }
        }

        category === 'A' && refrigeration === 'S' ? rate = convert(2) : rate = convert(4);
        endPrice = unitPrice + storageCost + rate;
        storeAll += storageCost;
        rateAll += rate;

        if (endPrice <= 20) {
            rank = 'cheap';
            countCheap++;
        }
        if (endPrice > 20 && endPrice <= 100) {
            rank = 'normal';
            countNormal++;
        }
        if (endPrice > 100) {
            rank = 'expensive';
            countExpensive++;
        }

        if (i == 0) lessEndPrice = endPrice;
        if (endPrice > upEndPrice) upEndPrice = endPrice;
        if (endPrice < lessEndPrice) lessEndPrice = endPrice

        function convert(percent) {
            return unitPrice * (percent / 100);
        }

        unit.push({ storageCost, rate, endPrice, rank });
    }

    outlay = storeAll + rateAll;
    averageSC = simply(storeAll);
    averageRate = simply(rateAll);

    function simply(exp) {
        return Number((exp / obj.length).toFixed(2))
    }

    all = {
        averageSC, averageRate,
        storeAll, rateAll, outlay,
        upEndPrice, lessEndPrice,
        countCheap, countNormal, countExpensive
    };
    return { all, unit };
}

try {
    var res,
        obj = [
            { unitPrice: 15, refrigeration: 'S', category: 'A' },
            { unitPrice: 20, refrigeration: 'S', category: 'L' },
            { unitPrice: 20, refrigeration: 'S', category: 'V' },
            { unitPrice: 30, refrigeration: 'N', category: 'V' },
            { unitPrice: 30, refrigeration: 'S', category: 'V' },
            { unitPrice: 60, refrigeration: 'S', category: 'A' },
            { unitPrice: 60, refrigeration: 'S', category: 'L' },
            { unitPrice: 60, refrigeration: 'S', category: 'V' },
            { unitPrice: 75, refrigeration: 'N', category: 'L' },
            { unitPrice: 75, refrigeration: 'N', category: 'A' },
            { unitPrice: 125, refrigeration: 'S', category: 'V' },
            { unitPrice: 150, refrigeration: 'N', category: 'L' },
        ];

    // test
    assert.strictEqual(res, calc(obj))
} catch (error) {
    console.log(error);
}