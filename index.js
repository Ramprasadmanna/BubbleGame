var newHit;
var score = 0;
const difficulty = 20;
var HighScore;

function saveScore() {
  if (localStorage.getItem("HigestScore")) {
    HighScore = localStorage.getItem("HigestScore");
    if (score > HighScore) {
      localStorage.setItem("HigestScore", score);
      HighScore = score;
    }
  }

  else {
    HighScore = score;
    localStorage.setItem("HigestScore", score);
  }
}

function increaseScore() {
  score += 10;
  document.querySelector("#score").textContent = score;
}

function decreaseScore() {
  if (score >= 5) {
    score -= 5;
  }
  document.querySelector("#score").textContent = score;
}

function makeBubbles() {
  var bubblesCreated = "";

  for (var i = 0; i <= 153; i++) {
    var randomNumber = Math.floor(Math.random() * difficulty);
    bubblesCreated += `<div class="bubble">${randomNumber}</div>`;
  }

  document.querySelector('#panelBottom').innerHTML = bubblesCreated;
}

function getNewHit() {
  newHit = Math.floor(Math.random() * difficulty);
  document.querySelector("#Hit").textContent = newHit;
}

var counter = 59;
function runTimer() {
  var timerinterval = setInterval(() => {
    if (counter > 0) {
      counter--;
      document.querySelector("#timer").textContent = counter;
    }

    else {
      clearInterval(timerinterval);
      saveScore();
      document.querySelector('#panelBottom').style.flexDirection = 'column'
      document.querySelector('#panelBottom').innerHTML = `<h1>Game over your score is ${score}</h1>`;
      document.querySelector('#panelBottom').innerHTML += `<p>Higest score ${HighScore}</p>`;
    }

  }, 1000);
}

document.querySelector("#panelBottom").addEventListener('click', function (e) {
  var clickedNum = Number(e.target.textContent);

  if (e.target.classList[0] === "bubble") {
    if (clickedNum === newHit) {
      increaseScore();
      getNewHit();
      makeBubbles();
    }

    else {
      decreaseScore();
    }
  }



});


makeBubbles();
getNewHit();
runTimer();
