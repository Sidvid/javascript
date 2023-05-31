const memoize = (fn) => {
  let cache = {};
  return (param) => {
    if (cache[param]) {
        console.log("from cache")
      return cache[param];
    }
    console.log("from new calculation ")
    cache[param] = fn(param);
    return cache[param];
  };
};
const add = (val) => val + 10;
const addToNum = memoize(add);
console.log(addToNum(10));
console.log(addToNum(10));
console.log(addToNum(10));
console.log(addToNum(10));
console.log(addToNum(20));
