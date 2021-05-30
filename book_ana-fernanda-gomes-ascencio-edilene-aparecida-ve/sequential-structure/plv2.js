const assert = require('assert')

var mul = function (n1, n2, n3) {
    return n1 * n2 * n3

}
try {
    assert.strictEqual(24, mul(2, 4, 3))
} catch (error) {
    console.log(error);

}