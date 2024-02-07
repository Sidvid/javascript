class Calculator {
  constructor() {
    this.total = 0;
  }

  add(val) {
    this.total += val;
    return this; // Return the instance of the Calculator object
  }

  sub(val) {
    this.total -= val;
    return this; // Return the instance of the Calculator object
  }
}

const eq1 = new Calculator();
console.log(eq1.add(10).sub(5).total); // Output: 5
