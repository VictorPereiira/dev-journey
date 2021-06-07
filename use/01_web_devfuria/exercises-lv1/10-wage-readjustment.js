const assert = require('assert');

var calc = function (wage, rej) {
    return wage += wage * (rej / 100);
}

try {
    assert.strictEqual(1150, (calc(1000, 15)))
} catch (error) {
    console.log(error);
}