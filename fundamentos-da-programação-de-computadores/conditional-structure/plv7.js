const assert = require('assert')

var calc = function (collaborator, wage, percent) {
    if (wage < 500) {
        let newWage = wage + (wage * (percent / 100))
        return true
    } else {
        return false
    }
}

try {
    var percent = 30

    assert.ok(calc('Marcos', 350, percent))
    assert.ok(!calc('Júlia', 500, percent))
    assert.ok(!calc('Mônica', 1200, percent))
} catch (error) {
    console.log(error);
}