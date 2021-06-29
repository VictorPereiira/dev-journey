const assert = require('assert')

var calc = function (obj) {
    let averageAgeEyeH, ageEyeHCount = 0, ageEywHAmount = 0,
        upAge = 0, countW = 0, countM = 0, menPercent

    for (let i in obj) {
        let gender = obj[i].gender,
            h = obj[i].h,
            age = obj[i].age,
            eye = obj[i].eye

        if (eye === 'BW' && h > 1.60) {
            ageEyeHCount++
            ageEywHAmount += age
        }

        if (age > upAge) upAge = age

        if (gender === 'W') {
            if (age > 20 && age <= 45 || eye === 'GR' && h < 1.70) countW++
        }

        if (gender === 'M') countM++
    }

    menPercent = Number(((countM * 100) / obj.length).toFixed(2))
    averageAgeEyeH = ageEywHAmount / ageEyeHCount
    return { averageAgeEyeH, upAge, countW, menPercent }
}

try {
    var res,
        obj = [
            { gender: 'M', h: 1.83, age: 25, eye: 'BW' },
            { gender: 'W', h: 1.67, age: 18, eye: 'BW' },
            { gender: 'M', h: 1.56, age: 74, eye: 'BL' },
            { gender: 'W', h: 1.62, age: 52, eye: 'GR' },
            { gender: 'W', h: 1.64, age: 31, eye: 'BL' }
        ]

    // test
    assert.strictEqual(res, calc(obj))
} catch (error) {
    console.log(error);
}

