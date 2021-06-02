const assert = require('assert')

var calc = function (workTime, plusTime) {
    let wage = 1000,
        a = workTime * (wage / 8),
        b = plusTime * (wage / 4),
        c, d, e

    return { a, b }
}

try {
    assert.strictEqual(1000, calc(8).a)
    assert.strictEqual(500, calc(8, 2).b)
} catch (error) {
    console.log(error);
}

