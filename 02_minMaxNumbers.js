'use strict';

function findMinAndMax(arr) {
    var min = Number.MAX_VALUE;
    var max = Number.MIN_VALUE;
    for (var i = 0; i < arr.length; i++) {
        if (min > arr[i])
            min = arr[i];
        if (max < arr[i])
            max = arr[i];
    }
    return [min, max];
}

var res = findMinAndMax([500, 1, -23, 0, -300, 28, 35, 12]);
console.log('Min -> ' + res[0]);
console.log('Max -> ' + res[1]);