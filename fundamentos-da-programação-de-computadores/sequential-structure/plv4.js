const assert = require('assert')

var weighted = function (n1, n2, p1, p2) {
    return ((n1 * p1) + (n2 * p2)) / (p1 + p2)
}

try {
    var n1, n2, p1, p2
    n1 = 9
    n2 = 7
    p1 = 2
    p2 = 3

    assert.strictEqual(7.8, weighted(n1, n2, p1, p2))
} catch (error) {
    console.log(error);
}