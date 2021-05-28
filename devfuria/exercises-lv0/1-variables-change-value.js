const assert = require('assert');

var a, b, temp;
a = 999;
b = 555;

temp = a;
a = b;
b = temp;

try {
    assert.strictEqual(555, a);
    assert.strictEqual(999, b);
} catch (error) {
    console.log(error);
}