const data = [
  {
    item: "🍭",
    price: 2.99,
    type: "sweet",
  },
  {
    item: "🍫",
    price: 1.99,
    type: "sweet",
  },
  {
    item: "🥫",
    price: 1.99,
    type: "savory",
  },
  {
    item: "🍬",
    price: 0.89,
    type: "sweet",
  },
  {
    item: "🥦",
    price: 3.99,
    type: "savory",
  },
  {
    item: "🍖",
    price: 3.99,
    type: "savory",
  },
];
function candyMaker(data) {
  return data.map((item) => {
    let { type, ...other } = item;
    return { ...other };
  });
}
console.log(candyMaker(data));
