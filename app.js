let timeDisp = document.querySelector(".timerDisplay");
let start = document.querySelector("#startTimer");
const stop = document.querySelector("#resetTimer");
let alisan;
let [ms, s, mn] = [0, 0, 0];

document.querySelector(".container").addEventListener("click", (e) => {
  if (e.target.classList.contains("start")) {
    if (start.classList.contains("start")) {
      start.classList.remove("start");
      start.innerHTML = `<i class="fa-solid start fa-pause"></i>`;
      alisan = setInterval(timer, 10);
    } else {
      start.classList.add("start");
      start.innerHTML = `<i class="fa-solid  start fa-play"></i>`;
      clearInterval(alisan);
    }
  } else if (e.target.classList.contains("stp")) {
    clearInterval(alisan);
    timeDisp.innerHTML = `00 : 00 : 00`;
    [ms, s, mn] = [0, 0, 0];

    start.classList.add("start");
    start.innerHTML = `<i class="fa-solid  start fa-play"></i>`;
  }
});

function timer() {
  ms += 1;
  if (ms == 100) {
    ms = 0;
    s++;
    if (s == 60) {
      s = 0;
      mn++;
    }
  }
  let mss = ms < 10 ? "0" + ms : ms;
  let ss = s < 10 ? "0" + s : s;
  let mnn = mn < 10 ? "0" + mn : mn;

  timeDisp.innerHTML = `${mnn} : ${ss} : ${mss}`;
}
