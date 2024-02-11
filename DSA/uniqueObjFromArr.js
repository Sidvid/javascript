// let arr = [
//   {
//     id: 1,
//     name: "sid",
//   },
//   {
//     id: 2,
//     name: "mike",
//   },
//   {
//     id: 3,
//     name: "john",
//   },
//   {
//     id: 3,
//     name: "joe",
//   },
// ];
const uniqueElem = (array, key) => {
  return array.filter((elem, index) => {
    return array.findLastIndex((s) => s[key] === elem[key]) === index;
  });
};
// console.log(uniqueElem(arr, "id"));
function findKeyPath(obj, targetKey, currentPath = []) {
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      const newPath = [...currentPath, key];

      if (key === targetKey) {
        return newPath.join(".");
      }

      if (typeof value === "object") {
        const path = findKeyPath(value, targetKey, newPath);
        if (path) {
          return path;
        }
      }
    }
  }

  return null;
}

const myObj = {
  name: "sid",
  age: "30",
  address: {
    city: "delhi",
    streetInfo: {
      streetName: "kondapur",
      sid: {
        shekhar: {
          pranjal: "",
        },
      },
    },
  },
};

const keyToFind = "pranjal";
const keyPath = findKeyPath(myObj, keyToFind);

if (keyPath) {
  console.log(keyPath);
} else {
  console.log(`${keyToFind} not found in the object.`);
}
