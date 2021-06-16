const assert = require('assert')

var calc = function (obj) {
    let onePercent = 0.01 * obj.length, lowWeight = 0,
        ageUp50 = 0, h10To20 = 0, height = 0, average = 0, down40 = 0;

    for (let i in obj) {
        let age = obj[i].age;

        if (age > 50) ageUp50++;
        if (age >= 10 && age <= 20) { h10To20++; height += obj[i].h; };
        if (obj[i].w < 40) down40++;
    }

    lowWeight = down40 / onePercent;
    average = height / h10To20;
    return { ageUp50, average, lowWeight };
}

try {
    let res,
        obj = [
            { age: 76, h: 0, w: 93.2 },
            { age: 35, h: 0, w: 33.9 },
            { age: 51, h: 0, w: 55.2 },
            { age: 15, h: 1.79, w: 63.7 },
            { age: 17, h: 1.23, w: 39.5 }
        ];

    assert.strictEqual(res, calc(obj))
} catch (error) {
    console.log(error);
}