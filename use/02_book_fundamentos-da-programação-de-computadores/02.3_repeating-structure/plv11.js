const assert = require('assert');

var calc = function (value) {
    let startValue = value, endValue, parcelCount = 6, percent = 3, result = []

    for (let i = 0; i < 10; i++) {
        function convert(nbr) {
            return Number((nbr).toFixed(2));
        }

        if (i == 0) {
            inCash = {
                parcelCount: 1,
                parcelValue: value - (value * (20 / 100)),
                endValue: value - (value * (20 / 100))
            }

            result.push(inCash);
        } else {
            if (i > 1) {
                parcelCount += 6;
                percent += 3;
            }

            value += (value * (percent / 100));
            parcelValue = convert(value / parcelCount);
            endValue = convert(parcelValue * parcelCount);

            result.push({
                parcelCount,
                parcelValue,
                endValue
            });
        }


    }

    return { startValue, result };
}

// try {
//     let res;

//     // test
//     assert.strictEqual(res, calc(6000));

// } catch (error) {
//     console.log(error);
// }

console.log(calc(6000));