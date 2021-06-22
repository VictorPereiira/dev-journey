const assert = require('assert')

var calc = function (array) {
    let pair, odd,
        result = [];

    for (let i in array) {
        if ((array[i] % 2) == 0) {
            i == 0 ? pair = array[i] + ' ' : pair += array[i] + ' ';
        } else {
            i == 0 ? odd = array[i] + ' ' : odd += array[i] + ' ';
        }

        return [pair, odd]
    }
}

try {
    var res,
        array = [1, 2, 3, 4, 5, 6];

    // test
    assert.strictEqual(res, calc(array))
} catch (error) {
    console.log(error);
}