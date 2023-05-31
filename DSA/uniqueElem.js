const arr = [ 1, 2, 2, 3, 3, 4, 5];
function uniqueElem(array) {
  // const newArr =[]
  return array.filter((el , index , self) => {
    return self.indexOf(el) === index
  });
}
console.log(uniqueElem(arr));
