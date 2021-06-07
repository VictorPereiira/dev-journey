const assert = require('assert')

var calc = function (wage) {
    let lessOrEqual300 = wage <= 300,
        interval300To500 = wage > 300 && wage <= 500,
        interval500To700 = wage > 500 && wage <= 700,
        interval700To800 = wage > 700 && wage <= 800,
        interval800To1000 = wage > 800 && wage <= 1000,
        up1000 = wage > 1000

    function readjust(percent) {
        return wage += (wage * (percent / 100))
    }

    lessOrEqual300 ? wage = readjust(50) : wage
    interval300To500 ? wage = readjust(40) : wage
    interval500To700 ? wage = readjust(30) : wage
    interval700To800 ? wage = readjust(20) : wage
    interval800To1000 ? wage = readjust(10) : wage
    up1000 ? wage = readjust(5) : wage

    return wage = Number(wage.toFixed(2))
}

try {
    // lessOrEqual300
    assert.strictEqual(150, calc(100))
    assert.strictEqual(450, calc(300))

    // interval300To500
    assert.strictEqual(436.8, calc(312))
    assert.strictEqual(500, calc(357.14))

    // interval500To700
    assert.strictEqual(560, calc(400))
    assert.strictEqual(700, calc(500))

    // interval700To800
    assert.strictEqual(715, calc(550))
    assert.strictEqual(799.99, calc(615.38))

    // interval800To1000
    assert.strictEqual(864, calc(720))
    assert.strictEqual(res, calc(910))

    // up1000
    assert.strictEqual(res, calc())
} catch (error) {
    console.log(error);
}