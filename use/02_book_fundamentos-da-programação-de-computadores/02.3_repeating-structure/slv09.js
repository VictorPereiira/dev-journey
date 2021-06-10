const assert = require('assert')

var calc = function (obj) {
    let studentName = [],
        status = [],
        average = [],
        averageClass = 0,
        pass = 0,
        wait = 0,
        stop = 0;

    function converter(element) {
        return Number(element.toFixed(1))
    }

    for (let i = 0; i < obj.length; i++) {
        studentName.push(obj[i].name)
        averageNotes = (obj[i].note1 + obj[i].note2) / 2;
        average.push(converter(averageNotes));

        averageNotes <= 3 ? (msg = 'Disapproved', stop++) : averageNotes
        averageNotes > 3 && averageNotes <= 7 ? (msg = 'Recovery', wait++) : averageNotes
        averageNotes > 7 ? (msg = 'Approved', pass++) : averageNotes
        status.push(msg);

        averageClass += averageNotes;
    }

    averageClass = converter(averageClass /= obj.length);

    return result = {
        studentName,
        average,
        averageClass,
        status,
        pass,
        wait,
        stop
    }
}

try {
    var res,
        student = [
            { name: 'Sabrina', note1: 8.8, note2: 4 },
            { name: 'Joabe', note1: 6, note2: 5.6 },
            { name: 'Marlene', note1: 7.1, note2: 8.9 },
            { name: 'Doriana', note1: 3.9, note2: 9 },
            { name: 'Nara', note1: 6.6, note2: 7.6 },
            { name: 'Cristovão', note1: 8, note2: 10 }
        ]

    //test
    // assert.strictEqual(res, calc(student))

} catch (error) {
    console.log(error);
}


console.log(calc(student));