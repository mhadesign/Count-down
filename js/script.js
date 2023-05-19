//Single Count-Down:
let counter = document.querySelector(".count");
let counterTiming = counter.dataset.time;
let counterValue = -1;
let counterUp = () => {
  counterValue++;
  counter.innerHTML = counterValue;

  if (counterValue == counter.dataset.number) {
    clearInterval(setCount);
  }
  if (counterValue != 0 && counterValue != counter.dataset.number) {
    counter.innerHTML = counterValue + "+";
  }
};
let setCount = setInterval(counterUp, counterTiming);

//Multiple Count-Down:
let counts = document.querySelectorAll(".mCount");
let convert = Array.from(counts);
convert.map((eachItem) => {
  let countValue = -1;
  let countsDown = function () {
    countValue++;
    eachItem.innerHTML = countValue;
    if (countValue == eachItem.dataset.number) {
      clearInterval(setInt);
    }
  };
  let setInt = setInterval(countsDown, eachItem.dataset.time);
});
