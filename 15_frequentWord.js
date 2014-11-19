'use strict';

function findMostFreqWord(str) {
    var result = [];
    var count = 1;
    str = str.toLowerCase().split(/\W|_/).filter(function (str) { return str != ''; });

    for (var i = 0; i < str.length; i++) {
        for (var j = i + 1; j < str.length; j++) {
            if (str[i] === str[j] && str[j] !== '') {
                count++;
                str[j] = '';
            }
        }
        if (count > 1) {
            result.push(str[i] + ' -> ' + count + ' times');
            count = 1;
        }
    }
    return sortArrayAlphabetically(result);
}

function sortArrayAlphabetically(strArray) {
    var j, temp;
    for (var i = 0; i < strArray.length; i++) {
        j = i;
        for (var k = i + 1; k < strArray.length; k++)
            if (strArray[k] < strArray[j])
                j = k;

        if (j !== i) {
            temp = strArray[i];
            strArray[i] = strArray[j];
            strArray[j] = temp;
        }
    }
    return strArray;
}


console.log(findMostFreqWord('in the middle of the night'));
console.log(findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.'));
console.log(findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.'));

