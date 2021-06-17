const assert = require('assert');

var calc = function (obj) {
    let aud, allAud = 0, result = [], convert;

    for (let i in obj) {
        aud = obj[i].aud;

        if (i == 0) {
            for (let x in obj) {
                allAud += obj[x].aud;
            }
        }

        convert = Number(((aud * 100) / allAud).toFixed(2))
        result.push(convert)
    }

    return result
}

try {
    let res,
        obj = [
            { ch: 4, aud: 40850 },
            { ch: 5, aud: 500987 },
            { ch: 7, aud: 4978345 },
            { ch: 12, aud: 5078965 }
        ]

    // test
    assert.strictEqual(res, calc(obj));
} catch (error) {
    console.log(error);
}