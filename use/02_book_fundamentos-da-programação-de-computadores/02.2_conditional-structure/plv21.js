const assert = require('assert')

var check = function (coding) {
    coding === 1 ? category = 'south' : coding
    coding === 2 ? category = 'north' : coding
    coding === 3 ? category = 'east' : coding
    coding === 4 ? category = 'west' : coding
    coding >= 5 && coding <= 6 ? category = 'northEast' : coding
    coding >= 7 && coding <= 9 ? category = 'southeast' : coding
    coding >= 10 && coding <= 20 ? category = 'midwest' : coding
    coding >= 21 && coding <= 30 ? category = 'northwest' : coding

    return category
}

try {
    let res

    // south
    assert.strictEqual('south', check(1))

    // north
    assert.strictEqual('north', check(2))

    // East
    assert.strictEqual('east', check(3))

    // West
    assert.strictEqual('west', check(4))

    // NorthEast 
    assert.strictEqual('northEast', check(5))
    assert.strictEqual('northEast', check(6))

    // southeast
    assert.strictEqual('southeast', check(7))
    assert.strictEqual('southeast', check(8))
    assert.strictEqual('southeast', check(9))

    // Midwest 
    assert.strictEqual('midwest', check(10))
    assert.strictEqual('midwest', check(17))
    assert.strictEqual('midwest', check(20))

    // Northwest 
    assert.strictEqual('northwest', check(21))
    assert.strictEqual('northwest', check(23))
    assert.strictEqual('northwest', check(30))

} catch (error) {
    console.log(error);
}