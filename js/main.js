let myCar = document.getElementById("myCar");
let svg = document.querySelector("svg");
let table = document.querySelector(".table");
let road = document.getElementsByClassName("road");
let otherCars = document.querySelectorAll(".img");
let audio = document.querySelector("audio");
let body = document.getElementsByClassName("body");
let appendImg = document.getElementsByClassName("flex-class");
let score = document.getElementById("score");
let level = document.getElementById("level");
let fly = document.getElementById("fly");
let move = 40;
let randomCarsClientsArr = [];
let width = Math.floor(myCar.getBoundingClientRect().width);
let height = Math.floor(myCar.getBoundingClientRect().height);
// console.log(window.innerWidth, "-", window.innerHeight);
for (let a = 1; a <= 1500; a++) {
  let a50 = a / 119;
  if (a / a50.toString().split(".")[0] == 119) {
    randomCarsClientsArr.push(a);
  } else {
    a;
  }
}

function randomSetCarsFunc() {
  let randomSetCarsClients = Math.floor(Math.random() * 11);
  let randomSetCarsClients2 = Math.floor(Math.random() * 1500);
  let randomSetCars = Math.floor(Math.random() * 8);
  let randomLeft = Math.floor(Math.random() * (window.innerWidth - width));
  otherCars[randomSetCars].style.animationPlayState = "running";
  otherCars[randomSetCars].style.left = `${randomSetCarsClients2}`;
  // console.log(randomSetCars);
}

// for (let i = 0; i <= 7; i++) {
//   otherCars[i].addEventListener("animationstart", function () {
//     setInterval(() => {
//       randomSetCarsFunc();
//     }, 1);
//   });
// }
window.onload = () => {
  myCar.style.position = "absolute";
  myCar.style.top = "0%";
  myCar.style.left = "0%";
  audio.play();
};
window.addEventListener("keydown", (e) => keyDownFunc(e));
function keyDownFunc(e) {
  let x = Math.floor(myCar.getBoundingClientRect().x);
  let y = Math.floor(myCar.getBoundingClientRect().y);
  switch (e.keyCode) {
    case 32: // Space bar
      if (Math.floor(fly.innerHTML) > 0) {
        if (
          (myCar.classList.add("flyCarAnim"),
          audio.play(),
          setTimeout(() => {
            myCar.classList.remove("flyCarAnim");
          }, 1000))
        ) {
          fly.innerHTML--;
          audio.play();
        }
      } else if (fly.innerHTML <= 0) {
        myCar.classList.remove("flyCarAnim");
      }
      break;
    case 87: // W
      if (y == 3) {
        audio.play();
      } else {
        audio.play();
        myCar.style.top = parseInt(myCar.style.top) - move + "px";
      }
      break;
    case 83: // S
      if (y == 483) {
        audio.play();
      } else {
        audio.play();
        myCar.style.top = parseInt(myCar.style.top) + move + "px";
      }
      break;
    case 65: // A
      if (x == 25) {
        audio.play();
      } else {
        audio.play();
        myCar.style.left = parseInt(myCar.style.left) - move + "px";
      }
      break;
    case 68: // D
      if (x == 1385) {
        audio.play();
      } else {
        myCar.style.left = parseInt(myCar.style.left) + move + "px";
        audio.play();
      }
      break;
    case 27: // Esc
      audio.play();
      for (let i = 0; i < 7; i++) {
        otherCars[i].classList.toggle("otherCarsEsc");
      }
      audio.pause();
      myCar.classList.toggle("otherCarsEsc");
      body[0].classList.toggle("filterBody");
      road[0].classList.toggle("otherCarsEsc");
      break;
    case 192: // ~
      table.classList.toggle("table-move");
      break;
  }
}
setInterval(() => {
  score.innerHTML++;
  for (let a = 0; a <= score.innerHTML; a++) {
    let a50 = a / 50;
    if (score.innerHTML / a50.toString().split(".")[0] == 50) {
      level.innerHTML++;
    } else {
      level;
    }
  }
  for (let a = 0; a <= 7; a++) {
    if (level.innerHTML == 1) {
      // alert("Level 1");
      road[0].style.animationDuration = ".9s";
      otherCars[a].style.animationDuration = "3.5s";
      otherCars[1].style.animationDuration = "3s";
      otherCars[5].style.animationDuration = "3s";
      otherCars[6].style.animationDuration = "3s";
      otherCars[7].style.animationDuration = "3s";
    } else if (level.innerHTML == 2) {
      // alert("Level 2");
      road[0].style.animationDuration = ".8s";
      otherCars[a].style.animationDuration = "3s";
      otherCars[1].style.animationDuration = "3s";
      otherCars[5].style.animationDuration = "2s";
      otherCars[6].style.animationDuration = "2s";
      otherCars[7].style.animationDuration = "2s";
    } else if (level.innerHTML == 3) {
      // alert("Level 3");
      road[0].style.animationDuration = ".7s";
      otherCars[a].style.animationDuration = "2.5s";
      otherCars[1].style.animationDuration = "1s";
      otherCars[5].style.animationDuration = "1s";
      otherCars[6].style.animationDuration = "1s";
      otherCars[7].style.animationDuration = "1s";
    } else if (level.innerHTML == 4) {
      // alert("Level 4");
      road[0].style.animationDuration = ".6s";
      otherCars[a].style.animationDuration = "2s";
      otherCars[1].style.animationDuration = "1s";
      otherCars[5].style.animationDuration = "1s";
      otherCars[6].style.animationDuration = "1s";
      otherCars[7].style.animationDuration = "1s";
    } else if (level.innerHTML == 5) {
      // alert("Level 5");
      road[0].style.animationDuration = ".4s";
      otherCars[a].style.animationDuration = "1.5s";
      otherCars[1].style.animationDuration = "1s";
      otherCars[5].style.animationDuration = "1s";
      otherCars[6].style.animationDuration = "1s";
      otherCars[7].style.animationDuration = "1s";
    } else if (level.innerHTML == 6) {
      // alert("Level 6");
      road[0].style.animationDuration = ".3s";
      otherCars[a].style.animationDuration = "1s";
      otherCars[1].style.animationDuration = "0.5s";
      otherCars[5].style.animationDuration = "0.5s";
      otherCars[6].style.animationDuration = "0.5s";
      otherCars[7].style.animationDuration = "0.5s";
    } else if (level.innerHTML == 7) {
      // alert("Level 7");
      road[0].style.animationDuration = ".2s";
      otherCars[a].style.animationDuration = "1s";
      otherCars[1].style.animationDuration = "0.5s";
      otherCars[5].style.animationDuration = "0.5s";
      otherCars[6].style.animationDuration = "0.5s";
      otherCars[7].style.animationDuration = "0.5s";
    }
  }

  for (let a = 0; a <= score.innerHTML; a++) {
    let a50 = a / 20;
    if (score.innerHTML / a50.toString().split(".")[0] == 20) {
      fly.innerHTML++;
    } else {
      fly;
    }
  }

  localStorage.setItem("score", score.innerHTML);
  localStorage.setItem("level", level.innerHTML);
}, 900);
svg.addEventListener("click", () => {
  table.classList.toggle("table-move");
});
