const assert = require('assert');

var calc = function (obj) {
    let age, weight,
        weightCount1 = 0, count1 = 0,
        weightCount2 = 0, count2 = 0,
        weightCount3 = 0, count3 = 0,
        averageWeight1, averageWeight2, averageWeight3;

    for (let i in obj) {
        age = obj[i].age;
        weight = obj[i].weight;

        if (age >= 1 && age <= 10) {
            weightCount1 += weight;
            count1++
        } else if (age > 11 && age <= 30) {
            weightCount2 += weight;
            count2++
        } else if (age > 30) {
            weightCount3 += weight;
            count3++
        }
    }

    averageWeight1 = weightCount1 / count1;
    averageWeight2 = weightCount2 / count2;
    averageWeight3 = weightCount3 / count3;

    return { averageWeight1, averageWeight2, averageWeight3 };

}

try {
    let res,
        obj = [
            { age: 5, weight: 35 },
            { age: 22, weight: 63 },
            { age: 67, weight: 72 },
            { age: 9, weight: 40 },
            { age: 30, weight: 53 },
            { age: 95, weight: 68 }
        ]

    // test
    assert.strictEqual(res, calc(obj))

} catch (error) {
    console.log(error);
}