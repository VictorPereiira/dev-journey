const assert = require('assert');

var calc = function (products, soldAmount) {
    let wage = 545, soldValue = 0, commission, soldQuantity = 0,
        objStar, quantityUp = 0, indexProduct,
        result = [];

    for (let i = 0; i < 4; i++) {
        let product = products[i],
            soldAm = soldAmount[i],
            tempSoldValue = product * soldAm;

        soldValue += tempSoldValue;
        soldQuantity += soldAm;

        if (soldAm > quantityUp) {
            quantityUp = soldAm;
            indexProduct = soldAmount.indexOf(soldAm);

            objStar = { product, indexProduct }
        }

        result.push({ product, soldAm, tempSoldValue })
    }

    commission = 0.05 * soldValue;
    wage += commission;

    return {
        soldValue, wage, commission,
        soldQuantity, objStar, result
    };
}

try {
    var res,
        products = [5, 10, 15, 20],
        soldAmount = [2, 5, 2, 3];

    assert.strictEqual(res, calc(products, soldAmount))
} catch (error) {
    console.log(error);
}

console.log(calc(products, soldAmount));