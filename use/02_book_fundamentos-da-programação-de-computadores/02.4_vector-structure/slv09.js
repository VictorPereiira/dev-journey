const assert = require('assert');


let result = [],
    flights = [
        ['Rio de Janeiro', 'Salvador', 30],
        ['São Paulo', 'Manaus', 30],
        ['Espirito Santo', 'Ceará', 30]
    ];

var calc = function (id, origin, destiny, opc1, opc2) {

    if (opc1 == 1) {
        if (opc2 == 1) result.push(flights[id]);
        if (opc2 == 2) result.push(flights[]);
        if (opc2 == 3)
    }
}

try {
    var res;

    // test
    assert.strictEqual(res, calc(id, origin, destiny, opc1, opc2))
} catch (error) {
    console.log(error);
}