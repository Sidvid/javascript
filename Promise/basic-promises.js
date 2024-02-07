const prom = new Promise((resolve, reject) => {
  const randomNum = Math.floor(Math.random() * (100 - 0) + 0);
  if (randomNum % 2 === 0) {
    resolve(`Yeppppp!!!!! The number is ${randomNum}`);
  } else {
    reject(`Ohhhhh!!!! The number is ${randomNum}`);
  }
});
prom
  .then((message) => {
    console.log(message, "Success");
  })
  .catch((err) => {
    console.log(err, "ERROR");
  })
  .finally((fin) => {
    console.log(fin, "Finally");
  });
// This is basic use of promise
console.log("--------------XXXXXXX---------------");

// -----------------------------------------------------------------xxxx---------------------------------------------------------
const asyncPromiseUse = new Promise((resolve, reject) => {
  const randomNum = Math.floor(Math.random() * (100 - 0) + 0);
  console.log("1"); // (1) this will be printed first as this comes first in promise execution
  if (randomNum % 2 === 0) {
    console.log("IF"); //(2) then this will be executed ( either if or else block code will be executed)
    setTimeout(() => {
      console.log("2"); // (5) then it will be executed
      resolve(`Yeppppp!!!!! The number is ${randomNum}`);
    }, 1000);
  } else {
    console.log("ELSE");
    setTimeout(() => {
      console.log("2");
      reject(`Ohhhhh!!!! The number is ${randomNum}`);
    }, 1000);
  }
});
console.log("OUTSIDE"); // (3) this will be executed at number 3 because promise is async and  it takes time to get the result from setTimeOut function so it print after that
asyncPromiseUse
  .then((message) => {
    console.log(message, "Success"); // (6) our promise is resolved and we get success message
  })

  .catch((err) => {
    console.log(err, "ERROR");
  })
  .finally(() => {
    console.log("Finally");
  });
console.log("END"); //(4)  this will be printed at number four , but before the promise resolved because still promise is in pending state
