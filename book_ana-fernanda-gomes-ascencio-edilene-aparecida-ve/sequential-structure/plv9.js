const assert = require('assert')

var calc = function (biggerBase, smallerBase, height) {
    return ((biggerBase + smallerBase) * height) / 2
}

try {
    assert.strictEqual(8, calc(5, 3, 2))
} catch (error) {
    console.log(MediaError);
}