const curry = (a) => {
  return (b) => {
    return a + b;
  };
};
const add = (x, y) => x + y; // we need to chanr this function in curry
console.log(curry(1)(2));
