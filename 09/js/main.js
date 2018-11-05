
(function () {



  let counter = 0;


  const originalHTML = document.body.innerHTML;

  let messageWrapper = document.getElementById('message');


  var positionX = 500;
  var positionY = 500;
  var audioD = document.createElement('audio')
  audioD.setAttribute('src', 'image/dolphin.wav')
  audioD.setAttribute('autoplay', 'autoplay')


  document.onclick = function (event) {

    event.preventDefault();

    audioD.pause();

    document.body.innerHTML = originalHTML;

    messageWrapper = document.getElementById('message');

  }



  document.onkeydown = function (event) {

    if (event.keyCode === 32) {

      event.preventDefault();

    }

  }



  document.onkeyup = function (event) {
    event.preventDefault();
    const keyCodePressed = event.keyCode;



    const coordinates = helpers.generateCoordinates();



    messageWrapper.innerText = keyCodePressed + ' : ' + event.key;



    if (keyCodePressed === 13) {

      // Figure out how to append a div with a

      // message into the coordinateWrapper

      const enterMessageDiv = document.createElement('div');

      enterMessageDiv.innerText = 'You pressed the enter key!';

      messageWrapper.appendChild(enterMessageDiv);



    } else if (keyCodePressed === 67) {



      const circle = document.createElement('div');

      circle.className = 'circle';

      circle.style.left = `${coordinates.x}px`;

      circle.style.top = `${coordinates.y}px`;

      circle.style.backgroundColor = helpers.generateRandomColorString();

      document.body.appendChild(circle);



    } else if (keyCodePressed === 81) {



      const degreesRotation = Math.floor(Math.random() * 45);


      const horse = document.createElement('img');

      horse.className = 'horse';

      horse.src = `image/horse.png`;

      horse.style.left = `${coordinates.x}px`;

      horse.style.top = `${coordinates.y}px`;
      horse.style.width = Math.floor(Math.random() * 150) + "px";
      //horse.style.transform =`resize(${resizeTo}px)`;

      horse.style.transform = `-webkit-rotate(${degreesRotation}deg)`;

      horse.style.transform = `rotate(${degreesRotation}deg)`;

      document.body.appendChild(horse);

    }

    else if (keyCodePressed === 87) {
      var horses = document.getElementsByClassName('horse');
      for (var i = 0; i < horses.length; i++) {
        var height = parseInt(horses[i].style.top, 10) + 500
        horses[i].style.top = height + 'px';
      }





    }
    else if (keyCodePressed === 65) {

      helpers.removeClass('animated');

      document.body.classList.add('animated');



    } else if (keyCodePressed === 69) {


      const steam = document.createElement('img');

      steam.className = 'steam';

      steam.src = `image/windows.png`;

      steam.style.left = `${positionX}px`;
      positionX = positionX + 4;

      steam.style.top = `${positionY}px`;
      positionY = positionY - 4;
      steam.style.width = 300 + "px";

      document.body.appendChild(steam);

    }


    else if (keyCodePressed === 84) {
      audioD.play();

    }

    else if (keyCodePressed === 82) {

      const degreesRotation = Math.floor(Math.random() * 45);


      const dolphin = document.createElement('img');

      dolphin.className = 'dolphin';

      dolphin.src = `image/dolphin.png`;

      dolphin.style.left = `${coordinates.x}px`;

      dolphin.style.top = `${coordinates.y}px`;

      document.body.appendChild(dolphin);


    }

    else if (keyCodePressed === 89) {

      const degreesRotation = Math.floor(Math.random() * 60);


      const palmtree = document.createElement('img');

      palmtree.className = 'palmtree';

      palmtree.src = `image/palmtree.png`;

      palmtree.style.left = `${coordinates.x}px`;

      palmtree.style.top = `${coordinates.y}px`;

      document.body.appendChild(palmtree);


    }

    else if (keyCodePressed === 32) {


      helpers.removeClass('animated');

      document.body.style.backgroundColor = helpers.generateRandomColorString();

    }



    counter++;


    messageWrapper.style.zIndex = counter;

  }




  setInterval(function () {

    messageWrapper.style.color = helpers.generateRandomColorString(false);

  }, 1000);




  const helpers = {



    removeClass: (cssClass) => {

      if (document.body.classList.contains(cssClass)) {

        document.body.classList.remove(cssClass);

      }

    },



    generateCoordinates: () => {

      const x = Math.floor(Math.random() * window.innerWidth);

      const y = Math.floor(Math.random() * window.innerHeight);

      return { x, y };

    },




    generateRandomColorString: (alpha = true) => {

      const r = Math.floor(Math.random() * ((255 - 130) + 1) + 130);

      const g = Math.floor(Math.random() * ((255 - 130) + 1) + 130);

      const b = Math.floor(Math.random() * ((255 - 130) + 1) + 130);

      let a = 1;

      if (alpha) {

        a = Math.random();

      }



      return `rgba(${r},${g},${b},${a})`;

    }



  }



}())