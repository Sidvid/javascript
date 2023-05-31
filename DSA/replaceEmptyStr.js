let obj = {
  name: "",
  age: 30,
  color: "black",
  edu: "",
};
function emptySwap(object) {
  let values = Object.values(object).map((elem) => {
    return elem === "" ? null : elem;
  });
  let map = Object.keys(obj).map((key, index) => {
    return [key, values[index]];
  });

  return Object.fromEntries(map);
}
console.log(emptySwap(obj));
