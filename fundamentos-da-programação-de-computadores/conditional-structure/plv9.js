const assert = require('assert')

var calc = function (client, balance) {
    let averageBalance = balance / 12,
        credit,
        percent,
        lessOrEqual200 = averageBalance <= 200,
        range200To300 = averageBalance > 200 && averageBalance <= 300,
        range300To400 = averageBalance > 300 && averageBalance <= 400

    if (lessOrEqual200) {
        percent = 0.10
    } else if (range200To300) {
        percent = 0.20
    } else if (range300To400) {
        percent = 0.25
    } else {
        percent = 0.30
    }

    averageBalance = Number(averageBalance.toFixed(2))
    credit = averageBalance * percent
    credit = Number(credit.toFixed(2))

    return {
        averageBalance,
        credit,
        client
    }
}

try {
    // assert.ok(calc(1200)) // balance < 200
    // assert.ok(calc(2400)) // balance === 200
    // assert.ok(calc(2800)) // balance ( 200 > && <= 300 )
    // assert.ok(calc(4200)) // balance ( 300 > && <= 400 )
    // assert.ok(calc(6000)) // balance > 400

    //less200
    assert.strictEqual(100, calc('Paulo', 1200).averageBalance)
    assert.strictEqual(10, calc('Paulo', 1200).credit)
    assert.strictEqual('Paulo', calc('Paulo', 1200).client)

    //Equal200
    assert.strictEqual(200, calc('Sonia', 2400).averageBalance)
    assert.strictEqual(20, calc('Sonia', 2400).credit)
    assert.strictEqual('Sonia', calc('Sonia', 2400).client)

    //range200To300
    assert.strictEqual(233.33, calc('Júlia', 2800).averageBalance)
    assert.strictEqual(46.67, calc('Júlia', 2800).credit)
    assert.strictEqual('Júlia', calc('Júlia', 2800).client)

    //range300To400
    assert.strictEqual(350, calc('João', 4200).averageBalance)
    assert.strictEqual(87.5, calc('João', 4200).credit)
    assert.strictEqual('João', calc('João', 4200).client)

    //range300To400
    assert.strictEqual(500, calc('Pedro', 6000).averageBalance)
    assert.strictEqual(150, calc('Pedro', 6000).credit)
    assert.strictEqual('Pedro', calc('Pedro', 6000).client)

} catch (error) {
    console.log(error);
}