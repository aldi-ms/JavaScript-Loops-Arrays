'use strict';

function findMostFreqNum(arr) {
    var number = arr[0];
    var maxCount = 1;
    var currentCount = 1;

    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++)
            if (arr[i] === arr[j])
                currentCount++;

        if (currentCount > maxCount) {
            maxCount = currentCount;
            number = arr[i];
        }
        currentCount = 1;
    }
    console.log(number + ' (' + maxCount + ' times)');
}

findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]);
findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]);
findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);