function int(num) {
  let flag;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      flag = true;
    }
  }
  return flag || false;
}
function isPrimeInArray(arr) {
  return arr.filter((el) => {
    return !int(el);
  });
}
console.log(
  isPrimeInArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])
);
