'use strict';

function printNumbers(number) {
    var result = [];
    for (var i = 1; i <= number; i++) {
        if (i % 5 !== 0 && i % 4 !== 0)
            result.push(i);
    }
    return result;
}

console.log(printNumbers(20));