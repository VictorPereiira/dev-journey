const assert = require('assert')

var calc = function (wageFixed, commission, sales) {
    let commissionValue = sales * (commission / 100)
    return wageFixed + commissionValue
}
try {
    assert.strictEqual(1282.8, calc(1110, 4, 4320))
} catch (error) {
    console.log(error);
}

//commissionValue  = 172,8