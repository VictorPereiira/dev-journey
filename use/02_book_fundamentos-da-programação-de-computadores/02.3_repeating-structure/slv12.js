const assert = require('assert');

var calc = function (obj) {
    let id, piece, gender,
        minWage = 1000,
        payroll = 0, pieceCount = 0,
        averagePiecesW, averagePiecesM,
        pieceW = 0, pieceM = 0, woman = 0, men = 0, wageUp = 0,
        result = [];

    for (let i in obj) {
        let wage = 0;

        id = obj[i].id;
        piece = obj[i].piece;
        gender = obj[i].gender;

        if (piece <= 30) wage = minWage;
        if (piece > 30 && piece <= 50) wage = convert(3);
        if (piece > 50) wage = convert(5);

        if (gender === 'W') { pieceW += piece; woman++; }
        if (gender === 'M') { pieceM += piece; men++; }
        if (wage > wageUp) { wageUp = wage; idUp = id; }

        payroll += wage;
        pieceCount += piece;
        result.push({ id, wage });
    }

    function arr(average) {
        return Number(average.toFixed(2))
    }

    function convert(percent) {
        return minWage + ((minWage * (percent / 100)) * (piece - 30))
    }

    averagePiecesW = arr(pieceW / woman);
    averagePiecesM = arr(pieceM / men);

    return { wageUp, idUp, averagePiecesW, averagePiecesM, payroll, pieceCount, result };
}

try {
    var res,
        obj = [
            { id: 0, piece: 25, gender: 'W' },
            { id: 1, piece: 35, gender: 'M' },
            { id: 2, piece: 60, gender: 'W' }
        ];

    // test
    assert.strictEqual(res, calc(obj));

} catch (error) {
    console.log(error);
}

// console.log(calc(obj));