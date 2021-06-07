const assert = require('assert')

var calc = function (wage) {
    let underOrEqual350 = wage <= 350,
        interval350To600 = wage > 350 && wage < 600,
        random600To900 = wage >= 600 && wage <= 900


    if (underOrEqual350) {
        wage += 100 - (wage * 0.07)
    } else if (interval350To600) {
        wage += 75 - (wage * 0.07)
    } else if (random600To900) {
        wage += 50 - (wage * 0.07)
    } else {
        wage += 35 - (wage * 0.07)
    }

    return wage = Number(wage.toFixed(2))

}
try {
    //underOrEqual350
    assert.strictEqual(235.67, calc(145.88))
    assert.strictEqual(425.5, calc(350))

    //interval350To600
    assert.strictEqual(582.45, calc(545.65))

    //random600To900
    assert.strictEqual(608, calc(600))
    assert.strictEqual(594.82, calc(558.95))
    assert.strictEqual(887, calc(900))

    //up900
    assert.strictEqual(1151, calc(1200))

} catch (error) {
    console.log(error);
}