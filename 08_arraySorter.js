'use strict';

function sortArray(arr) {
    var j, temp;
    for (var i = 0; i < arr.length; i++) {
        j = i;
        for (var k = i + 1; k < arr.length; k++)
            if (arr[k] < arr[j])
                j = k;

        if (j !== i) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    return arr;
}

console.log(sortArray([12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]));
console.log(sortArray([5, 4, 3, 2, 1]));