const assert = require('assert');

var calc = function (currentYear) {
    let wageIn2005 = 1000,
        percent = 1.5 / 100,
        wageIn2006,
        wage;

    wageIn2006 = wageIn2005 + (wageIn2005 * percent);
    wage = wageIn2006;

    for (let i = 2007; i < currentYear; i++) {
        percent *= 2;
        wage += (wage * percent)
    }

    wage = Number(wage.toFixed(2))

    return { wage, wageIn2006 };
}

try {
    let res;

    assert.strictEqual(1015, calc(2021).wageIn2006)
    assert.strictEqual(542462718053542.2, calc(2021).wage)
} catch (error) {
    console.log(error);
}