const testObject = {
  A: "siddhartha",
  B: 1,
  C: {
    D: "this is string",
    E: {
      F: true,
      G: [1, 2],
    },
  },
};
const deepFilter = (obj) => {
  const result = {};
  Object.keys(obj).map((keyOfObject) => {
    if (typeof obj[keyOfObject] === "string") {
      result[keyOfObject] = obj[keyOfObject];
    }
    if (
      typeof obj[keyOfObject] === "object" &&
      !Array.isArray(obj[keyOfObject])
    ) {
      result[keyOfObject] = deepFilter(obj[keyOfObject]);
    }
  });
  return result;
};
console.log(deepFilter(testObject));
