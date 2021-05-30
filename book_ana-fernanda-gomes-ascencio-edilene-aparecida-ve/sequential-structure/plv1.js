const assert = require('assert');

var sub = function (n, del) {
    return n - del
}
try {
    assert.strictEqual(1, sub(3, 2));
} catch (error) {
    console.log(error);
}