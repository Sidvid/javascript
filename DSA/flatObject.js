const testObject = {
  A: "12",
  B: 23,
  C: {
    P: 23,
    S: {
      L: 56,
    },
    Q: [1, 2, 3],
  },
};
const test = "C.P";
console.log(testObject[test]);

const deepFlat = (obj, key = "") => {
  const array = {};
  Object.keys(obj).forEach((keyOfObject) => {
    const newkey = key ? `${key}.${keyOfObject}` : keyOfObject;

    if (
      typeof obj[keyOfObject] === "object" &&
      !Array.isArray(obj[keyOfObject])
    ) {
      Object.assign(array, deepFlat(obj[keyOfObject], newkey));
    } else {
      array[newkey] = obj[keyOfObject];
    }
  });
  return array;
};
console.log(deepFlat(testObject));
