const assert = require('assert');

var ckeckNumber = function (n) {
    if (n >= 0) {
        return 'positive'
    } else {
        return 'negative'
    }
}

try {
    assert.strictEqual('positive', (ckeckNumber(100)))
    assert.strictEqual('positive', (ckeckNumber(0)))
    assert.strictEqual('negative', (ckeckNumber(-100)))
} catch (error) {
    console.log(error);
}