const assert = require('assert')

var calc = function (weight) {
    let fatten = weight + (weight * (15 / 100))
    let peak = weight - (weight * (20 / 100))
    return fatten, peak
}

try {
    assert.strictEqual((97.75, 68), calc(85))
} catch (error) {
    console.log(error);
}