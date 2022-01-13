const inputVal = document.getElementById("inputVal");
const inputNum = document.getElementById("inputNum");
const saveBtn = document.getElementById("btns");

saveBtn.addEventListener("click", () => {
  const name = inputVal.value;
  const notificationTime = inputNum.value;
  chrome.storage.sync.set({name, notificationTime})
})

chrome.storage.sync.get(['name', "notificationTime"], (result) => {
  console.log(result)
  inputVal.value = result.name ?? "???";
  inputNum.value = result.notificationTime ?? 1000
})