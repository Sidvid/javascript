// function difference(array, values) {
//   return [
//     ...array
//       .map((elem, index) => ({ elem, index }))
//       .filter((elem) => {
//         console.log("->", elem);
//         if (elem.elem === "" || elem.elem === undefined || elem.elem === null) {
//           console.log("HER");
//           return elem.elem;
//         }
//         return !values.find((val) => elem.elem === val);
//       }),
//   ];
// }
// console.log(difference([1, , 3], [1]));
function difference(array, values) {
  // write your code below

  const isValidArray = Array.isArray(array) && array.length;
  const isValuesArrayValid = Array.isArray(values) && values.length;

  // early escape conditions
  if (!isValidArray) {
    return [];
  } else if (isValidArray && !isValuesArrayValid) {
    return array;
  } else if (!isValuesArrayValid && !isValuesArrayValid) {
    return [];
  }

  const allUniqueValues = new Set(array);

  const toExclude = new Set(values);
  const excludedValues = [];

  allUniqueValues.forEach((value) => {
    if (!toExclude.has(value)) {
      excludedValues.push(value);
    }
  });

  return excludedValues;
}
console.log(difference([1, , 3], [1]));
