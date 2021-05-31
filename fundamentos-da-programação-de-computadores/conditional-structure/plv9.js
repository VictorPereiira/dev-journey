const assert = require('assert')

var calc = function (client, balance) {
    let averageBalance = balance / 12

    if (averageBalance <= 200) {
        return averageBalance, averageBalance * 0.10, client
    } else if (averageBalance > 200 && averageBalance <= 300) {
        return averageBalance, averageBalance * 0.20, client
    } else if (averageBalance > 300 && averageBalance <= 400) {
        return averageBalance, averageBalance * 0.25, client
    } else {
        return averageBalance, averageBalance * 0.30, client
    }

}

try {
    // assert.ok(calc(1200)) // balance < 200
    // assert.ok(calc(2400)) // balance === 200
    // assert.ok(calc(2800)) // balance ( 200 > && <= 300 )
    // assert.ok(calc(4200)) // balance ( 300 > && <= 400 )
    // assert.ok(calc(6000)) // balance > 400

    assert.strictEqual((100, 10, 'Paulo'), calc('Paulo', 1200))
    assert.strictEqual((200, 20, 'Sonia'), calc('Sonia', 2400))
    assert.strictEqual((233.33, 46.67, 'Júlia'), calc('Júlia', 2800))
    assert.strictEqual((350, 87.5, 'João'), calc('João', 4200))
    assert.strictEqual((500, 150, 'Pedro'), calc('Pedro', 6000))
} catch (error) {
    console.log(error);
}