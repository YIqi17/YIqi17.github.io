"use strict";

(function () {

})();


const messagewrapper = document.getElementById('message');


const plus = prompt('56+177=?');
const minus = prompt('233-35=?');
const times = prompt('198x2=?');
const total = prompt('(56+177-35)x2=?')

let message = '56+177=' + plus + '!\n';
if (plus > 233) {
    message += 'Wrong answer!\n';
} else if (plus < 233) {
    message += 'Wrong answer, please try again!\n';
}

message += '233-35=' + minus + '!\n';
if (minus > 198) {
    message += 'Wrong answer!\n';
} else if (minus < 198) {
    message += 'Wrong answer, please try again!\n';
}

message += '198x2=' + times + '!\n';
if (times > 396) {
    message += 'Wrong answer!\n';
} else if (times < 396) {
    message += 'Wrong answer, please try again!\n';
}

message += '(56+177-35)x2=' + total + '!\n';
if (total > 396) {
    message += 'Wrong answer!\n';
} else if (total < 396) {
    message += 'Wrong answer, please try again!\n';
}

messagewrapper.innerText = message;


