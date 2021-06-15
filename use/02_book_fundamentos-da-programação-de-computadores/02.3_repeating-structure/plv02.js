const assert = require('assert')

var calc = function () {
    let ticketValue = 5,
        ticketSold = 120,
        outlay = 200,
        gain = 0,
        result = [];

    for (let i = 0; i < 8; i++) {
        if (i > 0) {
            ticketSold += 26;
            ticketValue -= 0.50
        }

        gain = ticketValue * ticketSold - outlay
        result.push({ ticketValue, ticketSold, outlay, gain });
    }

    return result;
}

try {
    let res

    // Test
    assert.strictEqual(res, calc())
} catch (error) {
    console.log(error);
}