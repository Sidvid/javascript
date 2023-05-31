const obj1 = {
  a: 1,
  b: 2,
  c: 3,
};
function swapKeyValues(obj) {
  const invArr = Object.entries(obj).map((elem) => {
    let newArr = [];
    newArr = [elem[1], elem[0]];
    return newArr;
  });
  return Object.fromEntries(invArr);
}

console.log(swapKeyValues(obj1));
