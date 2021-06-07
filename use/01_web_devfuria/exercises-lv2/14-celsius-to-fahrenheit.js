const assert = require('assert')

var toFahrenheit = function (c) {
    let res = c * 1.8 + 32;
    return Math.trunc(res);
}

var toCelsius = function (f) {
    let res = (f - 32) / 1.8
    return Math.round(res);
}

try {
    assert.strictEqual(45, (toFahrenheit(7)), "C -> F")
    assert.strictEqual(7, (toCelsius(45)), "F -> C")
} catch (error) {
    console.log(error);
}