"use strict";

(function () {

})();


const messagewrapper = document.getElementById('message');


const one = prompt('Enter your first number');
const two = prompt('Enter your second number');
const three = prompt('Enter your third number');
const four = prompt('Enter your forth number')

let message = 'Your equation is ' + (one+two-three)*four;

messagewrapper.innerText = message;


