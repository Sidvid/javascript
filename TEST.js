class MyPromise {
  constructor(executor) {
    this.isCalled = false;
    this.onFullFilled = null;
    this.value = null;
    const resolve = (value) => {
      this.isCalled = true;
      if (typeof this.onFullFilled === "function") {
        this.onFullFilled(value);
      }
      executor(resolve);
    };
    const reject = () => {};
    executor(resolve, reject);
  }
  then(thenHandler) {
    this.onFullFilled = thenHandler;
    if (this.isCalled) {
      this.onFullFilled(this.value);
    }
  }
  catch(catchHandler) {}
}
const myProm = new MyPromise((resolve, reject) => {
  // resolve can be of two type : syc and async
  resolve("This is resolved check then");
});
myProm
  .then((msg) => {
    console.log(msg);
  })
  .catch(() => {});
