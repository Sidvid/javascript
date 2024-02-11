// -------------------------------------------- Question (1) ---------------------------------------------------
console.log(1);

const promise = new Promise((resolve) => {
  console.log(2);
  resolve();
  console.log(3);
});

console.log(4);

promise
  .then(() => {
    console.log(5);
  })
  .then(() => {
    console.log(6);
  });

console.log(7);

setTimeout(() => {
  console.log(8);
}, 10);

setTimeout(() => {
  console.log(9);
}, 0);
// First it will check synchronous code i.e. 1 2 3 4 7
// Async code execution is started first resolve get executed which result in priniting of 5 -->> 1 2 3 4 7 5
// After that control goes to next then and 6 will be prinited 1 2 3 4 7 5 6
//Now its time to look into set time out as the are below now 9 and 8 will be printed so final  output would be 1 2 3 4 7 5 6 9 8

// -------------------------------------------- Question (2) ---------------------------------------------------
new Promise((resolve, reject) => {
  resolve(1);
  resolve(2);
  reject("error");
}).then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log("error");
  }
);

// -------------------------------------------- Question (3) ---------------------------------------------------

Promise.resolve(1)
  .then(() => 2)
  .then(3) // 3 will not be returned from here
  .then((value) => value * 3) // value will be 2 because 2 is returned from first block of code
  .then(Promise.resolve(4)) // here also nothing is returned
  .then(console.log); // So 6 will be the output

// -------------------------------------------- Question (4) ---------------------------------------------------

Promise.resolve(1)
  .then((val) => {
    console.log(val); //1
    return val + 1;
  })
  .then((val) => {
    console.log(val); //2
  })
  .then((val) => {
    console.log(val); //undefined
    return Promise.resolve(3).then((val) => {
      console.log(val); //3
      //   return val; // if we return 3 from here then next console will print 3
    });
  })
  .then((val) => {
    console.log(val); //undefined
    return Promise.reject(4);
  })
  .catch((val) => {
    console.log(val); // 4
  })
  .finally((val) => {
    console.log(val); //undefined
    return 10;
  })
  .then((val) => {
    console.log(val); //undefined
  });
// -------------------------------------------- Question (5) ---------------------------------------------------
for (var i = 0; i < 5; i++) {
  ((i) => {
    setTimeout(() => {
      console.log(i);
    }, 100);
  })(i);
}

// -------------------------------------------- Question (6) ---------------------------------------------------

const obj = {
  dev: "bfe",
  a: function () {
    return this.dev;
  },
  b() {
    return this.dev;
  },
  c: () => {
    return this.dev;
  },
  d: function () {
    return (() => {
      return this.dev;
    })();
  },
  e: function () {
    return this.b();
  },
  f: function () {
    return this.b;
  },
  g: function () {
    return this.c();
  },
  h: function () {
    return this.c;
  },
  i: function () {
    return () => {
      return this.dev;
    };
  },
};

console.log(obj.a()); //bfe
console.log(obj.b()); //bfe
console.log(obj.c()); // ud
console.log(obj.d()); //bfe
console.log(obj.e()); //bfe
console.log(obj.f()()); //ud
console.log(obj.g()); //ud
console.log(obj.h()()); // ud
console.log(obj.i()()); //bfe

// -------------------------------------------- Question (7) ---------------------------------------------------

let a = 1; //1
const b = ++a; //2 first it will get increment then it will be saved in b
const c = a++; //2 here will be saved in c then it will be incremented
//3
console.log(a); //3
console.log(b); //2
console.log(c); //2
// -------------------------------------------- Question (8) ---------------------------------------------------

console.log(Boolean("false")); //true
console.log(Boolean(false)); //false
console.log("3" + 1); //31
console.log("3" - 1); //2
console.log("3" - " 02 "); //1
console.log("3" * " 02 "); //6
console.log(Number("1")); //1
console.log(Number("number")); //Nan
console.log(Number(null)); //0
console.log(Number(false)); //0

// -------------------------------------------- Question (9) ---------------------------------------------------
console.log(JSON.stringify([1, 2, null, 3]));
console.log(JSON.stringify([1, 2, undefined, 3]));
console.log(null === undefined); //false
console.log(null == undefined); //true
console.log(null == 0); //false
console.log(null < 0); //false
console.log(null > 0); //false
console.log(null <= 0); //true
console.log(null >= 0); //true
console.log(undefined == 0); //false
console.log(undefined < 0); //false
console.log(undefined > 0); //false
console.log(undefined <= 0); //false
console.log(undefined >= 0); //false

// -------------------------------------------- Question (10) ---------------------------------------------------
console.log(0 == false); //true
console.log("" == false); //true
console.log([] == false); //true
console.log(undefined == false); //false
console.log(null == false); //false
console.log("1" == true); //true
console.log(1n == true);
console.log(" 1     " == true); //true

// -------------------------------------------- Question (11) ---------------------------------------------------
console.log([] + []);
console.log([] + 1);
console.log([[]] + 1);
console.log([[1]] + 1);
console.log([[[[2]]]] + 1);
console.log([] - 1);
console.log([[]] - 1);
console.log([[1]] - 1);
console.log([[[[2]]]] - 1);
console.log([] + {});
console.log({} + {});
console.log({} - {});

// -------------------------------------------- Question (12) ---------------------------------------------------

function log(a, b, c, d) {
  console.log(a, b, c, d);
  arguments[0] = "bfe";
  arguments[3] = "dev";

  console.log(a, b, c, d);
}

log(1, 2, 3);
// -------------------------------------------- Question (13) ---------------------------------------------------

console.log((0 == 1) == 2);
console.log((2 == 1) == 0);
console.log(0 < 1 < 2);
console.log(1 < 2 < 3);
console.log(2 > 1 > 0);
console.log(3 > 2 > 1);

// -------------------------------------------- Question (14) ---------------------------------------------------

console.log(1 + 2); //3
console.log(1 + +2); //3
console.log(1 + +(+2)); //3
console.log(1 + "2"); //12
console.log(1 + +"2"); //3
console.log("1" + 2); //12
console.log("1" + +2); //12
console.log(1 + true); //2
console.log(1 + +true); //2
console.log("1" + true);
console.log("1" + +true);
console.log(1 + null);
console.log(1 + +null);
console.log("1" + null);
console.log("1" + +null);
console.log(1 + undefined);
console.log(1 + +undefined);
console.log("1" + undefined);
console.log("1" + +undefined);
console.log("1" + +(+undefined));

// -------------------------------------------- Question (15) ---------------------------------------------------

console.log(typeof null);
console.log(null instanceof Object);
console.log(typeof 1);
console.log(1 instanceof Number);
console.log(1 instanceof Object);
console.log(Number(1) instanceof Object);
console.log(new Number(1) instanceof Object);
console.log(typeof true);
console.log(true instanceof Boolean);
console.log(true instanceof Object);
console.log(Boolean(true) instanceof Object);
console.log(new Boolean(true) instanceof Object);
console.log([] instanceof Array);
console.log([] instanceof Object);
console.log((() => {}) instanceof Object);
// -------------------------------------------- Question (16) ---------------------------------------------------

console.log(["0"].map(parseInt));
console.log(["0", "1"].map(parseInt));
console.log(["0", "1", "1"].map(parseInt));
console.log(["0", "1", "1", "1"].map(parseInt));
//This is similiar like parseInt(item , index)

// -------------------------------------------- Question (17) ---------------------------------------------------

[1, 2, 3].reduce((a, b) => {
  console.log(a, b);
});

[1, 2, 3].reduce((a, b) => {
  console.log(a, b);
}, 0);
// a is return value , b is iteration value
// -------------------------------------------- Question (18) ---------------------------------------------------

const p1 = Promise.resolve(1);
const p2 = new Promise((resolve) => resolve(p1));
const p3 = Promise.resolve(p1);
const p4 = p2.then(() => new Promise((resolve) => resolve(p3)));
const p5 = p4.then(() => p4);

console.log(p1 == p2);
console.log(p1 == p3);
console.log(p3 == p4);
console.log(p4 == p5);

// -------------------------------------------- Question (18) ---------------------------------------------------

const obj1 = {
  a: 1,
  b: function () {
    console.log(this.a);
  },
  c() {
    console.log(this.a);
  },
  d: () => {
    console.log(this.a);
  },
  e: (function () {
    return () => {
      console.log(this.a);
    };
  })(),
  f: function () {
    return () => {
      console.log(this.a);
    };
  },
};

console.log(obj1.a); //1
obj1.b(); //1

const b1 = obj1.b;
b1(); //ud
obj1.b.apply({ a: 2 }); //2
obj1.c(); //ud
obj1.d(); //ud
obj1.d.apply({ a: 2 }); //2
obj1.e(); //1

obj1.e.call({ a: 2 }); //2
obj1.f()(); //1

obj1.f().call({ a: 2 }); //1
