'use strict';

function findMaxSequence(arr) {
    var sequenceLength = 1;
    var maxSequenceLength = sequenceLength;
    var maxIndexStart = -1;
    var result = [];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i - 1] < arr[i]) {
            sequenceLength++;
            continue;
        }
        else {
            if (sequenceLength > maxSequenceLength) {
                maxSequenceLength = sequenceLength;
                maxIndexStart = i - maxSequenceLength;
            }
            sequenceLength = 1;
        }
    }

    if (sequenceLength > maxSequenceLength) {
        maxSequenceLength = sequenceLength;
        maxIndexStart = i - maxSequenceLength;
    }

    if (maxIndexStart !== -1)
        for (var j = maxIndexStart; j < maxIndexStart + maxSequenceLength; j++)
            result.push(arr[j]);
    else
        result = 'no';

    return result;
}

console.log(findMaxSequence([3, 2, 3, 4, 2, 2, 4]));
console.log(findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]));
console.log(findMaxSequence([3, 2, 1]));