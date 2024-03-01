let mostRecord = document.getElementById("mostRecord");
let modal = document.getElementById("modal");
let flexModal = document.getElementById("flexModal");
let closeModal = document.getElementById("closeModal");
let scoreTxt = document.getElementById("scoreTxt");
let levelTxt = document.getElementById("levelTxt");
let resetRecord = document.getElementById("resetRecord");

mostRecord.addEventListener("click", function () {
  modal.classList.toggle("openModal");
  flexModal.classList.toggle("openFlexModal");
  closeModal.classList.add("openFlexModal");
  resetRecord.style.display = "inline-block";
});

closeModal.addEventListener("click", function () {
  modal.classList.remove("openModal");
  flexModal.classList.remove("openFlexModal");
  closeModal.classList.remove("openFlexModal");
  resetRecord.style.display = "none";
});

window.addEventListener("keydown", function (e) {
  if (e.keyCode == 27) {
    modal.classList.remove("openModal");
    flexModal.classList.remove("openFlexModal");
    closeModal.classList.remove("openFlexModal");
    resetRecord.style.display = "none";
  }
});

resetRecord.addEventListener("click", function (e) {
  score = 0;
  level = 0;
  scoreTxt.innerHTML = "Score: 0";
  levelTxt.innerHTML = "Level: 0";
  localStorage.setItem("score", "0");
  localStorage.setItem("level", "0");
});

let score = localStorage.getItem("score");
let level = localStorage.getItem("level");
scoreTxt.innerHTML = `Score: ${score}`;
levelTxt.innerHTML = `Level: ${level}`;
// if (score < score) {
//   scoreTxt.innerHTML = `Score: ${score}`;
// } else if (level < level) {
//   levelTxt.innerHTML = `Level: ${level}`;
// } else {
//   scoreTxt.innerHTML = `Score: ${"0"}`;
//   levelTxt.innerHTML = `Level: ${"0"}`;
// }
