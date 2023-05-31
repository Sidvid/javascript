let arr = [1, 2, [3, 4, [5 , [6 , 90]], 7], 8];

function flatMe(array, level) {
  let arr = [];
  let iterate = level;
  let flatten = array.map((e) => {
    if (Array.isArray(e)) {
      while (level >= iterate) {
        arr.push(...e);
        level--;
      }
    } else {
      arr.push(e);
    }
  });
  return arr;
}
console.log(flatMe(arr, 3));
