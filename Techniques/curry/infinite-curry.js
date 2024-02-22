const infinitecurry = (a) => {
  return (b) => {
    //Check here that is there any value in b , id yes then call inifinitecurry again
    if (b) {
      return infinitecurry(a + b);
    }
    return a;
  };
};
console.log(infinitecurry(1)(2)(3)()); // inifinitecurry(2)(3)(4) ..... as many arguments we can pass
