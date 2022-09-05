const ball = document.getElementsByClassName('ball');
const pRgbColor = document.getElementById('rgb-color');
const pAnswer = document.getElementById('answer');
const buttonStart = document.getElementById('start');

function randomColor() {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 101);
    
  return `rgb(${red}, ${green}, ${blue})`;
}

function backgroundBall() {
  for (let index = 0; index < ball.length; index += 1) {
    ball[index].style.backgroundColor = randomColor();
  }
}

backgroundBall();

function randomElementClassBall() {
  const element = ball[Math.floor(Math.random() * ball.length)]
  const elementColor = [];
  elementColor.push(element.style.backgroundColor);
    
  return elementColor;
}

pRgbColor.innerText = randomElementClassBall();
pAnswer.innerText = 'Escolha uma cor';

function ifColorEqual(event) {
	if (event.target.style.backgroundColor == pRgbColor.innerText) {
		pAnswer.innerText = 'Acertou!';
	} else {
		pAnswer.innerText = 'Errou! Tente novamente!';
	}
}

for (let index = 0; index < ball.length; index += 1) {
	ball[index].addEventListener('click', ifColorEqual);
}
