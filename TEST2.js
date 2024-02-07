const myCurry = (a) => {
  return (b) => {
    if (b) {
      return myCurry(a + b);
    }
    return a;
  };
};
console.log(myCurry(1)(4)(5)());
