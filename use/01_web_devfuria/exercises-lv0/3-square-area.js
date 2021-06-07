const assert = require('assert')

var area = function (side1, side2) {
    return side1 * side2
}

try {
    assert.strictEqual(25, area(5, 5))
} catch (error) {
    console.log(error);
}