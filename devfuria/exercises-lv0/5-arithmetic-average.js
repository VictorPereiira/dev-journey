const assert = require('assert');

var average = function (n1, n2, n3) {
    return (n1 + n2 + n3) / 3
}

try {
    assert.strictEqual(5, (average(5, 5, 5)));
} catch (error) {
    console.log();
}