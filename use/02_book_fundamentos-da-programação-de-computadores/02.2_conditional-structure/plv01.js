const assert = require('assert');

var calc = function (note) {
    if (note >= 7) {
        return 'approved'
    } else {
        return 'disapproved'
    }
}

try {
    assert.strictEqual('approved', calc(8))
    assert.strictEqual('disapproved', calc(5))
} catch (error) {
    console.log(error);
}