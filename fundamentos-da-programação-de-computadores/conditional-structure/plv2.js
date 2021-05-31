const assert = require('assert');

var calc = function (note1, note2) {
    let average = (note1 + note2) / 2;

    if (average >= 7 && average <= 10) {
        return 'approved';
    } else if (average >= 3 && average < 7) {
        return 'exam';
    } else if (average >= 0 && average < 3) {
        return 'disapproved';
    }
}

try {
    assert.strictEqual('approved', calc(6, 8))
    assert.strictEqual('exam', calc(3, 5))
    assert.strictEqual('disapproved', calc(3, 2))
} catch (error) {
    console.log(error);
}