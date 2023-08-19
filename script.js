function counterCallback() {
  const counter = document.querySelector("#theNumericalCounter");
  const countBlocks = document.querySelectorAll(".theSingleBackground");
  counter.innerText++;
  let forNumber = parseInt(counter.innerText);
  if (forNumber > 100) {
    for (let i = 0; i < countBlocks.length; i++) {
      const countBlock = countBlocks[i];
      countBlock.classList.remove("countBackgroundColor");
    }
    forNumber = parseInt(forNumber.toString().slice(-2));
  }

  for (let i = 0; i < countBlocks.length; i++) {
    const countBlock = countBlocks[i];
    if (i < forNumber) {
      countBlock.classList.add("countBackgroundColor");
    }
  }
}

const countArea = document.querySelector("main");
const windowArea = document.body;

countArea.addEventListener("click", counterCallback);
windowArea.addEventListener("keydown", function (event) {
  if (event.key === "Enter" || event.key === " ") {
    counterCallback();
  }
});

const resetCounter = document.querySelector("#resetCounter");

resetCounter.addEventListener("click", function () {
  const countBlocks = document.querySelectorAll(".theSingleBackground");
  for (let i = 0; i < countBlocks.length; i++) {
    const countBlock = countBlocks[i];
    countBlock.classList.remove("countBackgroundColor");
  }
  document.querySelector("#theNumericalCounter").innerText = "0";
});
