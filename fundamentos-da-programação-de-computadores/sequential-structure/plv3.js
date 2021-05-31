const assert = require('assert')

var div = function (n, div) {
    return n / 2
}

try {
    assert.strictEqual(12, div(24, 2))
} catch (error) {
    console.log(error);

}