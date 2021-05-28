const assert = require('assert')

var fees = function (capital, percent, period) {
    let res, convertPercent;

    convertPercent = percent / 100;
    res = capital * convertPercent * period;
    return res
}

try {
    assert.strictEqual(2560, (fees(16000, 4, 4)))
} catch (error) {
    console.log(error);

}