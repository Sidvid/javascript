function debounce(callback, delay) {
  let timer;
  return function (...args) {
    clearInterval(timer);
    timer = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}
const inputEnter = (val) => {
  return `This is input and will be delayed -${val}`;
};
const delayInput = debounce(inputEnter, 2000);
console.log(delayInput("Sorry for delay"));
