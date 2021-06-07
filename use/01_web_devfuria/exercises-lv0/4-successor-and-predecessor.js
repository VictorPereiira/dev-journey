const assert = require('assert')


var suc = function (n) {
    return n + 1;
}

var pre = function (n) {
    return n - 1;
}

try {
    var n = 2

    assert.strictEqual(3, suc(n));
    assert.strictEqual(1, pre(n));
} catch (error) {
    console.log(error);
}