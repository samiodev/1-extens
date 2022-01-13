const timeElement = document.getElementById('time');
const timerElement = document.getElementById("timer");
const nameElement = document.getElementById("name");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");


function updateTimeElements() {
  chrome.storage.local.get(["timer"], (result) => {
    const time = result.timer ?? 0;
    timerElement.textContent = `The timer is at: ${time} seconds`
  })
  const currentTime = new Date().toLocaleTimeString();
  timeElement.textContent = `The time is: ${currentTime}`;
}
updateTimeElements()
setInterval(updateTimeElements, 1000)

chrome.storage.sync.get(['name'], (result) => {
  const name = result.name ?? "???"
  nameElement.textContent = `Your name is: ${name}`;
})


startBtn.addEventListener("click", () => {
  chrome.storage.local.set({isRunning: true});
})
stopBtn.addEventListener("click", () => {
  chrome.storage.local.set({isRunning: false});
})
resetBtn.addEventListener("click", () => {
  chrome.storage.local.set({timer: 0, isRunning: false});
})