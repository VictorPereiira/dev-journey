const assert = require('assert')

var calc = function (wage, debit1, debit2, percent) {
    let debitA, debitB
    debitA = debit1 + (debit1 * (percent / 100))
    debitB = debit2 + (debit2 * (percent / 100))
    return wage - (debitA + debitB)
}

try {
    assert.strictEqual(156, calc(400, 50, 60, 2))
} catch (error) {
    console.log();
}