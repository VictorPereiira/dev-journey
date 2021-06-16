const assert = require('assert')

var calc = function (obj) {
    let yes = 0, no = 0, womenYes = 0,
        men = 0, menNo = 0, percent = 0;

    for (let i in obj) {
        anw = obj[i].anw;
        gender = obj[i].gender;

        if (anw === 'y') yes++;
        if (anw === 'n') no++;
        if (anw === 'y' && gender === 'w') womenYes++;
        if (gender === 'm') men++;
        if (anw === 'n' && gender === 'm') menNo++;
    }

    percent = 0.01 * men;
    percent = menNo / percent;

    return { yes, no, womenYes, percent }
}

try {
    let res,
        obj = [
            { gender: 'm', anw: 'n' },
            { gender: 'w', anw: 'y' },
            { gender: 'm', anw: 'y' }
        ];

    // test
    assert.strictEqual(res, calc(obj))
} catch (error) {
    console.log(error);
}