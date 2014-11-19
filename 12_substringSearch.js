'use strict';

function countSubstringOccur(arr) {
    var str = arr[1].toLowerCase();
    var substr = arr[0].toLowerCase();
    str += "";
    substr += "";
    if(substr.length<=0)
        return str.length+1;

    var n = 0;
    var pos = 0;
    var step = substr.length;

    while(true){
        pos = str.indexOf(substr, pos);
        if (pos >= 0) {
            n++;
            pos+=step;
        } else
            break;
    }
    return(n);
}

console.log(countSubstringOccur(['in', 'We are living in a yellow submarine. We don\'t have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.']));
console.log(countSubstringOccur(['your', 'No one heard a single word you said. They should have seen it in your eyes. What was going around your head.']));
console.log(countSubstringOccur(['but', 'But you were living in another world tryin\' to get your message through.']));
