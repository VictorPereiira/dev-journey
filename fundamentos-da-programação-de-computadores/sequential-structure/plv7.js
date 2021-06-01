const assert = require('assert')

var calc = function (weight) {
    let fatten = weight + (weight * (15 / 100)),
        peak = weight - (weight * (20 / 100))

    return { fatten, peak }
}

try {
    assert.strictEqual(97.75, calc(85).fatten)
    assert.strictEqual(68, calc(85).peak)

} catch (error) {
    console.log(error);
}