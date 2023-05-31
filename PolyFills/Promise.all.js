const prom1 = Promise.resolve("sid");
const prom2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("set time out");
  }, 4000);
});
const prom3 = "mike";
const prom4 = new Promise((resolve, reject) => {
  resolve("peter");
});

Promise.myAll = function (values) {
  return new Promise((resolve) => {
    const result = [];
    let completed = 0;
    values.forEach((prom, index) => {
      Promise.resolve(prom).then((msg) => {
        result[index] = msg;
        completed++;
        if (completed === values.length) {
          resolve(result);
        }
      });
    });
  });
};
const allProm = Promise.myAll([prom1, prom2, prom3, prom4]).then((val) => {
  console.log(val);
});
