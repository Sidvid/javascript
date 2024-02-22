let arr = [1, 2, [3, 4, [5, [6, 90]], 7], 8];
function flatArray(array, dept) {
  let flatArr = [];

  array.forEach((e) => {
    if (Array.isArray(e) && dept > 1) {
      flatArr.push(...flatArray(e, dept - 1));
    } else {
      flatArr = [...flatArr, e];
    }
  });
  return flatArr;
}
console.log(flatArray(arr, 3));
