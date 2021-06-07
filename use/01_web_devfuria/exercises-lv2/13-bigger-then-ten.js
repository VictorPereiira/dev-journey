const assert = require('assert');

var checkNumber = function (n) {
    if (n > 10) {
        return true;
    } else {
        return false;
    }
}

try {
    assert.ok(checkNumber(4));
} catch (error) {
    console.log('This value is less or equal to 10');
    console.log(error);
}