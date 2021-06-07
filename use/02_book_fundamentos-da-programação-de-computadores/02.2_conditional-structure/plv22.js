const assert = require('assert')

var check = function (age, weight) {
    let category,
        lessOrEqual60 = weight <= 60,
        radom60To90 = weight > 60 && weight < 90,
        bigger90 = weight > 90

    if (age < 20) {
        lessOrEqual60 ? category = 9 : category
        radom60To90 ? category = 8 : category
        bigger90 ? category = 7 : category

    } else if (age >= 20 && age <= 50) {
        lessOrEqual60 ? category = 6 : category
        radom60To90 ? category = 5 : category
        bigger90 ? category = 4 : category

    } else {
        lessOrEqual60 ? category = 3 : category
        radom60To90 ? category = 2 : category
        bigger90 ? category = 1 : category
    }

    return category
}

try {
    let res

    // age === 18
    assert.strictEqual(9, check(18, 56.6))
    assert.strictEqual(9, check(18, 60))
    assert.strictEqual(8, check(18, 75))
    assert.strictEqual(7, check(18, 93.7))

    //age ≥ 20 && age ≤50 
    assert.strictEqual(6, check(20, 56))
    assert.strictEqual(6, check(20, 60))
    assert.strictEqual(5, check(20, 75))
    assert.strictEqual(4, check(20, 93))

    assert.strictEqual(6, check(37, 56))
    assert.strictEqual(6, check(37, 60))
    assert.strictEqual(5, check(37, 75))
    assert.strictEqual(4, check(37, 93))

    assert.strictEqual(6, check(50, 56))
    assert.strictEqual(6, check(50, 60))
    assert.strictEqual(5, check(50, 75))
    assert.strictEqual(4, check(50, 93))

    // age > 50  
    assert.strictEqual(3, check(75, 56.6))
    assert.strictEqual(3, check(75, 60))
    assert.strictEqual(2, check(75, 75))
    assert.strictEqual(1, check(75, 93.7))

} catch (error) {
    console.log(error);
}