const assert = require('assert');

var calc = function (n) {
    if (n % 2 == 0) {
        return 1
    } else {
        return 0
    }
}

try {
    assert.strictEqual(1, calc(8))
    assert.strictEqual(0, calc(5))
    assert.strictEqual(1, calc(0))

} catch (error) {
    console.log(error);
}

// or

// var calc = function (n) {
//     if (n % 2 == 0) {
//         return true
//     } else {
//         return false
//     }
// }

// try {
//     assert.ok(calc(8))
//     assert.ok(!calc(5))
//     assert.ok(calc(0))

// } catch (error) {
//     console.log(error);
// }