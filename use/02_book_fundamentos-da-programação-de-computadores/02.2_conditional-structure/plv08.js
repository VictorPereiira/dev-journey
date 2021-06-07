const assert = require('assert')

var calc = function (collaborator, wage) {
    let newWage;

    if (wage <= 300) {
        newWage = wage + (wage * 0.35)
        return true
    } else {
        newWage = wage + (wage * 0.15)
    }
}
try {
    assert.ok(calc('Paula', 250))
    assert.ok(calc('João', 300))
    assert.ok(!calc('Vitória', 800))
} catch (error) {
    console.log(error);
}