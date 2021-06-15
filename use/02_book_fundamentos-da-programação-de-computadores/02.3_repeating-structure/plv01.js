const assert = require('assert')


var calc = function (obj) {
    let result = [];

    for (let i in obj) {
        let writing = obj[i],
            ascendant = obj[i].sort();

        result.push({
            writing,
            ascendant
        })
    }

    return result;
}

try {
    let res,
        obj = [
            [A = 4, B = 9, C = 1, D = 6],
            [A = 5, B = 0, C = 2, D = 7],
            [A = 6, B = 1, C = 3, D = 8],
            [A = 7, B = 2, C = 4, D = 9],
            [A = 8, B = 3, C = 5, D = 0]
        ]

    // test 
    assert.strictEqual(res, calc(obj))
} catch (error) {
    console.log(error);
}