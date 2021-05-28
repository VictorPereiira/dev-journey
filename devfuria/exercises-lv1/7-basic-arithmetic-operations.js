const assert = require('assert')

var sum = function (n, add) {
    return n + add;
}
var sub = function (n, del) {
    return n - del;
}
var mul = function (n, mul) {
    return n * mul;
}
var div = function (n, div) {
    return n / div;
}

try {
    var n1, n2;
    n1 = 4;
    n2 = 2;

    assert.strictEqual(6, sum(n1, n2));
    assert.strictEqual(2, sub(n1, n2));
    assert.strictEqual(8, mul(n1, n2));
    assert.strictEqual(2, div(n1, n2));

} catch (error) {
    console.log(error);
}