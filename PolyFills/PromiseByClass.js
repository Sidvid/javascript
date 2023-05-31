class MyPromise {
  constructor(executor) {
    this.onFullFilled = null;
    this.isCalled =false;
    const resolve = (value) => {
      this.isCalled = true;
      this.value =value;
      
      if (typeof this.onFullFilled === "function") {
        this.onFullFilled(value);
      }
    };

    executor(resolve);
  }
  then(callback) {
    this.onFullFilled = callback;
    if(this.isCalled){
      this.onFullFilled(this.value)
    }

  }
}
const prom = new MyPromise((resolve) => {
  setTimeout(() => {
    resolve("I am resolved");
  }, 3000);
  // resolve("i am resolved");
}).then((msg) => {
  console.log("=>", msg);
});
