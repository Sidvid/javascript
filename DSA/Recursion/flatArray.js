let arr = [1, 2, [3, 4, [5, [6, 90]], 7], 8];
function flatArray(array) {
  let flatArr = [];
  console.log(flatArr , array)
  array.forEach((e) => {
    if (Array.isArray(e)) {
      // debugger;
      flatArr.push(...flatArray(e));
    } else {
      flatArr = [...flatArr, e];
      // debugger;
    }
  });
  return flatArr;
}
console.log(flatArray(arr, 3));

