const assert = require('assert')

var delta = function (a, b, c) {
    return Math.pow(b, 2) - 4 * a * c;
}

var x1 = function (a, b, c) {
    return (-b + Math.sqrt(delta(a, b, c)) / 2 * a)
}

var x2 = function (a, b, c) {
    return (-b - Math.sqrt(delta(a, b, c)) / 2 * a)
}

try {
    var a, b, c;
    a = 1;
    b = 0;
    c = -16;

    assert.strictEqual(64, (delta(a, b, c)), "delta")
    assert.strictEqual(4, (x1(a, b, c)), "x1")
    assert.strictEqual(-4, (x2(a, b, c)), "x2")
} catch (error) {
    console.log(error);
}

