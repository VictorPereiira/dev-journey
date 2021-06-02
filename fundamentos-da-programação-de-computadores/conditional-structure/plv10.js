const assert = require('assert')

var calc = function (factoryPrice) {
    let carValue,
        cv = carValue,
        fp = factoryPrice

    let lessOrEqual12k = fp <= 12000,
        random12kTo25k = fp > 12000 && fp <= 25000,
        up25k = fp > 25000

    let lowPrice = fp + (fp * 0.05),
        mediumPrice = fp + (fp * 0.10) + (fp * 0.15),
        highPrice = fp + (fp * 0.15) + (fp * 0.20)

    lessOrEqual12k ? cv = lowPrice : cv
    random12kTo25k ? cv = mediumPrice : cv
    up25k ? cv = highPrice : cv

    return cv
}

try {
    // car = (factoryPrice + (factoryPrice * 0.05))  // lessOrEqual12k
    // car = (factoryPrice + (factoryPrice * 0.10) + (factoryPrice * 0.15))  // random12kTo25k
    // car = (factoryPrice + (factoryPrice * 0.15) + (factoryPrice * 0.20))  // up25k

    // less12k
    assert.strictEqual(10920, calc(10400))

    // Equal12k
    assert.strictEqual(12600, calc(12000))

    // random12kTo25k
    assert.strictEqual(22946.25, calc(18357))

    // Equal25k
    assert.strictEqual(31250, calc(25000))

    // high25k
    assert.strictEqual(87207.3, calc(64598))


} catch (error) {
    console.log(error);
}

