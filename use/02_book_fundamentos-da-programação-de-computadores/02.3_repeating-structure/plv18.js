const assert = require('assert')

var calc = function (obj) {
    let average = 0, wageGroup = 0,
        upWage, lessWage,
        wage200 = 0,
        person;

    for (let i in obj) {
        yOld = obj[i].yOld;
        gender = obj[i].gender;
        wage = obj[i].wage;
        wageGroup += wage;

        if (i == 0) {
            upWage = wage;
            lessWage = wage;
        } else {
            if (wage > upWage) upWage = wage;
            if (wage < lessWage) lessWage = wage;
        }

        if (gender === 'w' && wage <= 200) wage200++;
        if (wage == lessWage) person = { yOld, gender };
    }

    average = Number((wageGroup / obj.length).toFixed(2));
    return { average, upWage, lessWage, wage200, person }
}

try {
    let res,
        obj = [
            { yOld: 25, gender: 'w', wage: 197.95 },
            { yOld: 45, gender: 'm', wage: 128.65 },
            { yOld: 19, gender: 'w', wage: 478.36 }
        ]

    // test
    assert.strictEqual(res, calc(obj))
} catch (error) {
    console.log(error);
}