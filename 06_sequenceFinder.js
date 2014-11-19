'use strict';

function findMaxSequence(arr) {
    var sequenceStr = arr[0];
    var sequenceLength = 1;
    var maxSequenceLength = sequenceLength;
    var maxSequenceStr = sequenceStr;

    for (var i = 1; i < arr.length; i++) {
        if (sequenceStr === arr[i]) {
            sequenceLength++;
            continue;
        }
        else {
            if (sequenceLength >= maxSequenceLength) {
                maxSequenceLength = sequenceLength;
                maxSequenceStr = sequenceStr;
            }
            sequenceLength = 1;
            sequenceStr = arr[i];
        }
    }
    var result = [];
    do {
        result.push(maxSequenceStr);
        maxSequenceLength--;
    } while (maxSequenceLength > 0);

    return result;
}

console.log(findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]));
console.log(findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']));
console.log(findMaxSequence(['happy']));