// Promise.all , accepted behaviour
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 200);
});
const promise2 = new Promise((resolve) => {
  setTimeout(() => resolve(2), 300);
});
const promise3 = new Promise((resolve) => {
  setTimeout(() => resolve(3), 400);
});
const promises = [promise1, promise2, promise3];
const allPromise = Promise.all(promises)
  .then((message) => {
    console.log("Result of promise", message);
  })
  .catch((err) => {
    console.log("Error occurred in promise", err);
  });
// Promise.all , failed behaviour
const promise4 = new Promise((resolve) => resolve(5));
const promise5 = 6;
const promise6 = new Promise((resolve, reject) => {
  reject(7);
});
const promiseArray = [promise4, promise5, promise6];
const promiseCollection = Promise.all(promiseArray)
  .then((message) => {
    console.log("Promise Result", message);
  })
  .catch((err) => {
    console.log("Promise failed", err);
  });
