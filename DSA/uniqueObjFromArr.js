let arr = [
  {
    id: 1,
    name: "sid",
  },
  {
    id: 2,
    name: "mike",
  },
  {
    id: 3,
    name: "john",
  },
  {
    id: 3,
    name: "joe",
  },
];
const uniqueElem = (array) => {
  return array.filter((elem , index) => {
    return array.findIndex((s) => s.id === elem.id) === index;
  });
};
console.log(uniqueElem(arr));
