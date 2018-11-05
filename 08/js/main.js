

document.onkeyup = function (event) {
    const keyCodePressed = event.keyCode;
    document.getElementById('message').innerHTML =keyCodePressed;
    if(keyCodePressed === 13) {
        const x = Math.floor(Math.random()*window.innerWidth);
        const y = Math.floor(Math.random()*window.innerHeight);
        console.log(x, y);
        const coordinates = 'x: ' + x + ', y:'+ y;
        document.getElementById('coordinates').innerHTML = coordinates;

    }
}