const assert = require('assert')

var calc = function (value, type, months) {
    type === 1 ? value += (value * 0.03) * months : value
    type === 2 ? value += (value * 0.04) * months : value

    return value
}

try {
    let res;

    // type1
    assert.strictEqual(5512, calc(5200, 1, 2))

    // type2
    assert.strictEqual(5616, calc(5200, 2, 2))

} catch (error) {
    console.log(error);
}