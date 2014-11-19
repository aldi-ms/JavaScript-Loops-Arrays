'use strict';

function findPalindromes(str) {
    var palindromes = [];
    str = str.toLowerCase().split(/\W|_/).filter(function (str) { return str != ''; });
    //str = str.filter(function (str) { return str != ''; });

    for (var word in str) {
        if (checkWord(str[word]))
            palindromes.push(str[word]);
    }
    return palindromes;
}

function checkWord(word) {
    if (word === reverseString(word))
        return true;
    return false;
}

function reverseString(str) {
    return str.split('').reverse().join('');
}


console.log(findPalindromes('There is a man, his name was Bob and he listened to ABBA.'));