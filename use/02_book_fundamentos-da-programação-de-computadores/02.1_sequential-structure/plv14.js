const assert = require('assert')

var calc = function (old, year) {
    let a = year - old,
        b = a * 12,
        c = b * 30,
        d = Math.trunc(c / 7);

    return { a, b, c, d }
}

try {
    assert.strictEqual(20, calc(2001, 2021).a)
    assert.strictEqual(240, calc(2001, 2021).b)
    assert.strictEqual(7200, calc(2001, 2021).c)
    assert.strictEqual(1028, calc(2001, 2021).d)
} catch (error) {
    console.log(error);
}


