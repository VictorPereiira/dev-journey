const assert = require('assert')

var checkNumber = function (n1, n2) {
    if (n1 > n2) {
        return n2
    } else {
        return n1
    }
}

try {
    assert.strictEqual(2, checkNumber(6, 2))
    assert.strictEqual(4, checkNumber(4, 8))
} catch (error) {
    console.log(error);

}