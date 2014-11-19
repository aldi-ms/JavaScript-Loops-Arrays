'use strict';

function createArray() {
    var arr = Array(20);
    for (var i = 0; i < arr.length; i++)
        arr[i] = i * 5;
    return arr;
}

console.log(createArray());