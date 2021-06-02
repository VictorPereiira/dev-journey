const assert = require('assert')

var calc = function (value) {
    let shop, rank,
        underOrEqual50 = value <= 50,
        random50To100 = value > 50 && value <= 100,
        up100 = value > 100

    function readjust(percent) {
        return value += (value * (percent / 100))
    }

    underOrEqual50 ? value = readjust(5) : value
    random50To100 ? value = readjust(10) : value
    up100 ? value = readjust(15) : value


    if (value <= 80) {
        rank = 'cheap'
    } else if (value > 80 && value <= 120) {
        rank = 'normal'
    } else if (value > 120 && value <= 200) {
        rank = 'high'
    } else {
        rank = 'very high'
    }

    value = Number(value.toFixed(2))

    return shop = { value, rank }
}

try {
    // underOrEqual50
    assert.strictEqual(29.39, calc(27.99).value)
    assert.strictEqual(52.5, calc(50).value)

    // random50to100
    assert.strictEqual(72.59, calc(65.99).value)
    assert.strictEqual(110, calc(100).value)

    // up100
    assert.strictEqual(117.3, calc(102).value)
    assert.strictEqual(138, calc(120).value)

    // cheap
    assert.strictEqual('cheap', calc(27.99).rank)

    // Normal
    assert.strictEqual('normal', calc(100).rank)
    assert.strictEqual('normal', calc(102).rank)

    // Normal
    assert.strictEqual('high', calc(150).rank)
    assert.strictEqual('high', calc(173.91).rank)

    // very high
    assert.strictEqual('very high', calc(185.91).rank)

} catch (error) {
    console.log(error);
}