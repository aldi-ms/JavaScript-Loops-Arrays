'use strict';

function replaceSpaces(str) {
    //var splitStr = str.split(/\s/);
    //return splitStr.join('&nbsp;');
    return str.split(/\s/).join('');
}

console.log(replaceSpaces('But you were living in another world tryin\' to get your message through'));