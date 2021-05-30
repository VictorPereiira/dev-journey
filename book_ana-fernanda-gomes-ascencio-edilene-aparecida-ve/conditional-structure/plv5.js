const assert = require('assert')

var action = function (n1, n2, option) {
    if (option >= 1 && option <= 4) {
        if (option === 1) {
            return (n1 + n2) / 2
        } else if (option === 2) {
            if (n1 > n2) {
                return n1 - n2
            } else {
                return n2 - n1
            }
        } else if (option === 3) {
            return n1 * n2
        } else if (option === 4) {
            if (n2 !== 0) {
                return n1 / n2
            } else {
                return false
            }
        }

        return true

    } else {
        return false
    }
}

try {
    assert.ok(action(40, 10, 1))
    assert.ok(!action(40, 10, 9))
    assert.strictEqual(25, action(40, 10, 1))
    assert.strictEqual(3, action(5, 2, 2))
    assert.strictEqual(4, action(4, 8, 2))
    assert.strictEqual(21, action(7, 3, 3))
    assert.strictEqual(2, action(4, 2, 4))
    assert.ok(!action(3, 0, 4))
} catch (error) {
    console.log(error);
}