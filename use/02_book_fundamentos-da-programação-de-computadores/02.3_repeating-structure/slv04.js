const assert = require('assert')


var calc = function (obj) {
    let countCar = 0,
        smallCity = 0,
        accidentAverage = 0;

    for (let i = 0; i < obj.length; i++) {
        countCar += obj[i].cars;

        var maxAccidents,
            minAccidents,
            highCity,
            lowCity,
            accidents = obj[i].accidents,
            city = obj[i].name;

        if (i === 0) {
            maxAccidents = accidents;
            minAccidents = accidents;
            highCity = city;
            lowCity = city;
        }

        if (accidents > maxAccidents) {
            maxAccidents = accidents;
            highCity = city;
        } else if (accidents < minAccidents) {
            minAccidents = accidents
            lowCity = city
        }

        if (obj[i].cars < 2000) {
            smallCity++
            accidentAverage += accidents
        }
    }

    carLength = countCar
    carAverage = (countCar /= obj.length)
    accidentAverage = accidentAverage / smallCity

    return result = {
        carLength,
        carAverage,
        maxAccidents,
        minAccidents,
        highCity,
        lowCity,
        smallCity,
        accidentAverage
    }
}

try {
    var res,
        cites = [
            { name: 'São Gonçalo', cars: 10, accidents: 2 },
            { name: 'Niteroi', cars: 20, accidents: 4 },
            { name: 'Rio de Janeiro', cars: 30, accidents: 6 },
            { name: 'São Paulo', cars: 40, accidents: 8 },
            { name: 'Macaé', cars: 50, accidents: 10 }
        ];

    // data
    assert.strictEqual(150, calc(cites).carLength)
    assert.strictEqual(30, calc(cites).carAverage)
    assert.strictEqual(10, calc(cites).maxAccidents)
    assert.strictEqual(2, calc(cites).minAccidents)
    assert.strictEqual('Macaé', calc(cites).highCity)
    assert.strictEqual('São Gonçalo', calc(cites).lowCity)
    assert.strictEqual(5, calc(cites).smallCity)
    assert.strictEqual(6, calc(cites).accidentAverage)

} catch (error) {
    console.log(error);
}

console.log(data = calc(cites));