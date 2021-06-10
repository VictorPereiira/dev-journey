const assert = require('assert');

var calc = function (obj) {
    let minWage = 450,
        id = 0,
        result = [];

    function readjust(percent) {
        return minWage * (percent / 100);
    }

    for (let i = 0; i < obj.length; i++) {
        let turn = obj[i].workTurn,
            category = obj[i].category,
            workHour = obj[i].workTime,
            turnON = true, catON = true;

        turn === 'M' || turn === 'V' || turn === 'N' ? turnON : turnON = false
        category === 'O' || category === 'G' ? catON : catON = false

        if (turnON === false || catON === false) {
            // finished 
        } else {
            let timeValue = 2.8, // minWage / 160
                mv = turn === 'M' || turn === 'V',
                firstWage,
                endWage,
                cashFood;

            turn === 'N' && category === 'G' ? timeValue = readjust(18) : timeValue;
            mv && category === 'G' ? timeValue = readjust(15) : timeValue;
            turn === 'N' && category === 'O' ? timeValue = readjust(13) : timeValue;
            mv && category === 'O' ? timeValue = readjust(10) : timeValue;

            firstWage = workHour * timeValue;

            if (firstWage <= 300) {
                cashFood = firstWage * 0.20
            } else if (firstWage > 300 && firstWage <= 600) {
                cashFood = firstWage * 0.15
            } else {
                cashFood = firstWage * 0.05
            }

            id++
            endWage = firstWage + cashFood;

            results = {
                id,
                workHour,
                timeValue,
                firstWage,
                cashFood,
                endWage
            }

            result.push(results)
        }
    }

    return result
}

try {
    var res,
        collaborator = [
            // { workTime: 46, workTurn: 'K', category: 'O' }, //  Turn invalid
            // { workTime: 46, workTurn: 'V', category: 'H' }, // Category invalid
            { workTime: 46, workTurn: 'N', category: 'G' },
            { workTime: 75, workTurn: 'V', category: 'G' },
            { workTime: 100, workTurn: 'V', category: 'G' },
            { workTime: 220, workTurn: 'M', category: 'G' },
            { workTime: 80, workTurn: 'M', category: 'G' },
            { workTime: 426, workTurn: 'V', category: 'O' },
            { workTime: 500, workTurn: 'V', category: 'O' },
            { workTime: 60, workTurn: 'N', category: 'O' },
            { workTime: 97, workTurn: 'M', category: 'O' },
            { workTime: 275, workTurn: 'M', category: 'G' }
        ];

    // test
    assert.strictEqual(res, calc(collaborator))
} catch (error) {
    console.log(error);
}

// console.log(calc(collaborator));