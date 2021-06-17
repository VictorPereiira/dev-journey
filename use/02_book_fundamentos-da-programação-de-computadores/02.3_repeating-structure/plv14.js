const assert = require('assert')

var calc = function (obj) {
    let age, rating,
        rtCount1 = 0,
        all = obj.length, rtCount2 = 0, percent,
        ageBox3 = 0, rtCount3 = 0, average3

    for (let i in obj) {
        age = obj[i].age;
        rating = obj[i].rating;

        if (rating == 1) rtCount1++;
        if (rating == 2) rtCount2++;
        if (rating == 3) {
            rtCount3++;
            ageBox3 += age;
        }
    }

    average3 = ageBox3 / rtCount3;
    percent = Number(((rtCount2 * 100) / all).toFixed(2));
    return { rtCount1, percent, average3 };
}

try {
    let res,
        obj = [
            { age: 5, rating: 1 },
            { age: 22, rating: 2 },
            { age: 67, rating: 3 },
            { age: 9, rating: 1 },
            { age: 30, rating: 2 },
            { age: 95, rating: 3 }
        ];

    // test
    assert.strictEqual(res, calc(obj));
} catch (error) {
    console.log(error);
}