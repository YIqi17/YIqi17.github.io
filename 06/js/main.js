"use strict";

(function () {

})();


const messagewrapper = document.getElementById('message');


const one = parseInt(prompt('Enter your first number'));
const two = parseInt(prompt('Enter your second number'));
const three = parseInt(prompt('Enter your third number'));
const four = parseInt(prompt('Enter your forth number'));

let message = 'Your equation is ' + (one+two-three)*four;

messagewrapper.innerText = message;


