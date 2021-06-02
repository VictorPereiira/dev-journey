const assert = require('assert')

var calc = function (price) {
    let result,
        lessOrEqual30 = price <= 30,
        interval30To100 = price > 30 && price <= 100,
        up100 = price > 100

    function readjust(percent) {
        return price += (price * (percent / 100))
    }

    function getDiscount(percent) {
        return price * (percent / 100)
        // return Number((price * (percent / 100)).toFixed(2))
    }

    lessOrEqual30 ? result = { discount: 0, price } : price
    interval30To100 ? result = { discount: getDiscount(10), price: readjust(10) } : price
    up100 ? result = { discount: getDiscount(15), price: readjust(15) } : price

    return result
}

try {
    let res

    //LessOrEqual
    assert.strictEqual(0, calc(12).discount)
    assert.strictEqual(12, calc(12).price)

    assert.strictEqual(0, calc(30).discount)
    assert.strictEqual(30, calc(30).price) // price = 30

    // interval30To100
    assert.strictEqual(4.5, calc(45).discount)
    assert.strictEqual(49.5, calc(45).price)

    assert.strictEqual(10, calc(100).discount)
    assert.strictEqual(110, calc(100).price) // price = 100

    // up100
    assert.strictEqual(22.5, calc(150).discount)
    assert.strictEqual(172.5, calc(150).price)

} catch (error) {
    console.log(error);
}


