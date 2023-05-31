const prom1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("first");
  }, 1000);
});
const prom2 = Promise.resolve("second");
const prom3 = Promise.reject("third");
Promise.myAllSettled = function (values) {
  return new Promise((resolve, reject) => {
    let result = [];
    let complted = 0;
    values.forEach((prom, index) => {
      Promise.resolve(prom)
        .then((msg) => {
          complted++;

          result[index] = {
            value: msg,
            status: "fulfilled",
          };

          if (complted === values.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          complted++;
          result[index] = {
            value: err,
            status: "fulfilled",
          };
          if (complted === values.length) {
            resolve(result);
          }
        });
    });
  });
};
Promise.myAllSettled([prom1, prom2, prom3]).then((mess) => {
  console.log("FINAL", mess);
});
