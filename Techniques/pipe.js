let by1 = (val) => val + 1;
let by2 = (val) => val + 2;
let by3 = (val) => val + 3;
//! with the help of reduce
// const pipe = (...fun) => (val) => fun.reduce((acc, cVal) => cVal(acc), val);

//! with the help of for loop
const pipe = (...fun) => {
  return (values) => {
    let val = values;
    fun.forEach((fn, index) => {
      val = fn(val);
    });
    return val;
  };
};

let pipe1 = pipe(by1, by2, by3);
let val10 = pipe1(10);
console.log(val10);
