const assert = require('assert');

var calc = function (d1, d2) {
    return (d1 * d2) / 2

}
try {
    assert.strictEqual(4, calc(4, 2))
} catch (error) {
    console.log(error);
}