const assert = require('assert')

var calc = function (price, category, status) {
    let result,
        rise,
        imposition,
        label

    function percent(n) {
        return price * (n / 100)
    }
    function readjust(n) {
        return price += (rise = percent(n))
    }

    if (price <= 25) {
        category === 1 ? price = readjust(5) : price
        category === 2 ? price = readjust(8) : price
        category === 3 ? price = readjust(10) : price

    } else {
        category === 1 ? price = readjust(12) : price
        category === 2 ? price = readjust(15) : price
        category === 3 ? price = readjust(18) : price
    }

    if (category === 2 && status === 'r') {
        imposition = (price += percent(5))
    } else {
        imposition = (price += percent(8))
    }

    price <= 50 ? label = 'cheap' : price
    price > 50 && price <= 120 ? label = 'normal' : price
    price > 120 ? label = 'expensive' : price

    function converter(value) {
        return Number(value.toFixed(2))
    }

    rise = converter(rise)
    imposition = converter(imposition)
    price = converter(price)

    return result = { rise, imposition, price, label }
}

try {
    let res

    // test 1
    assert.strictEqual(1.99, calc(24.90, 2, 'n').rise)
    // assert.strictEqual(res, calc(35.50, 2, 'r').imposition)
    // assert.strictEqual(res, calc(22.99, 1, 'n').price)
    assert.strictEqual(res, calc(75.99, 3, 'r').label)

} catch (error) {
    console.log(error);
}