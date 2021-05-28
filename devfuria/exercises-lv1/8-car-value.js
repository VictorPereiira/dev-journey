const assert = require('assert');

var calc = function (a, b, c) {
    let res, convertB, convertC;

    convertB = a * (b / 100);
    convertC = a * (c / 100);
    res = a + convertB + convertC;

    return res;
}

try {
    var a, b, c
    a = 10000;
    b = 28;
    c = 45;

    assert.strictEqual(17300, (calc(a, b, c)));

} catch (error) {
    console.log(error);
}
