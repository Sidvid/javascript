const obj = {
  b: 1,
  a: (function () {
    return () => {
      console.log(this.b);
    };
  })(),
  c: function () {
    return function () {
      console.log(this.b);
    };
  },
};
console.log(obj.a());
