const assert = require('assert')

var checkNumbers = function (n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        return n1;
    } else if (n2 > n1 && n2 > n3) {
        return n2;
    } else if (n3 > n1 && n3 > n2) {
        return n3;
    }
}

try {
    assert.strictEqual(4, checkNumbers(4, 2, 3))
    assert.strictEqual(8, checkNumbers(5, 8, 2))
    assert.strictEqual(13, checkNumbers(4, 8, 13))
} catch (error) {
    console.log(error);

}