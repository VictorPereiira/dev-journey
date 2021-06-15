const assert = require('assert')

var calc = function (user) {
    let age,
        onePercent = 0.01 * user.length,
        ag1 = null, ag2 = null, ag3 = null, ag4 = null, ag5 = null,
        letterA, letterB, letterC;

    for (let i in user) {
        age = user[i].age;

        if (age <= 15) ag1++;
        if (age >= 16 && age <= 30) ag2++
        if (age > 31 && age <= 45) ag3++
        if (age >= 46 && age <= 60) ag4++
        if (age > 60) ag5++
    }

    letterA = { ag1, ag2, ag3, ag4, ag5 };
    letterB = ag1 / onePercent;
    letterC = ag5 / onePercent;

    return { letterA, letterB, letterC }

}


try {
    let res,
        user = [
            { id: 'Stephany', age: 45 },
            { id: 'Frederico', age: 12 },
            { id: 'Tainara', age: 26 },
            { id: 'Santiago', age: 79 },
            { id: 'Giulia', age: 18 },
            { id: 'Prince', age: 17 },
            { id: 'Kleyton', age: 55 },
            { id: 'Solange', age: 3 }
        ]

    assert.strictEqual(res, calc(user))
} catch (error) {
    console.log(error);
}