const assert = require('assert')

var calc = function (wage) {
    let readjust,
        lessOrEqual300 = wage <= 300,
        greater300AndLess600 = wage > 300 && wage < 600,
        random600To900 = wage >= 600 && wage <= 900

    if (lessOrEqual300) {
        readjust = { newWage: wage + (wage * 0.15), resValue: wage * 0.15 }
    } else if (greater300AndLess600) {
        readjust = { newWage: wage + (wage * 0.10), resValue: wage * 0.10 }
    } else if (random600To900) {
        readjust = { newWage: wage + (wage * 0.05), resValue: wage * 0.05 }
    } else {
        readjust = wage
    }


    return readjust
}

try {
    // lessOrEqual300
    assert.strictEqual(172.5, calc(150).newWage)
    assert.strictEqual(22.5, calc(150).resValue)

    // equal300
    assert.strictEqual(345, calc(300).newWage)
    assert.strictEqual(45, calc(300).resValue)

    // greater300AndLess600
    assert.strictEqual(481.25, calc(437.50).newWage)
    assert.strictEqual(43.75, calc(437.50).resValue)


    // equal600
    assert.strictEqual(630, calc(600).newWage)
    assert.strictEqual(30, calc(600).resValue)

    // random600To900
    assert.strictEqual(795.9, calc(758).newWage)
    assert.strictEqual(37.9, calc(758).resValue)

    // equal900
    assert.strictEqual(945, calc(900).newWage)
    assert.strictEqual(45, calc(900).resValue)

    // up900
    assert.strictEqual(1579, calc(1579))

} catch (error) {
    console.log(error);
}

