let data = [
  {
    name: "sid",
    children: [],
  },
  {
    name: "mike",
    children: [
      { name: "john", children: [] },
      { name: "amanada", children: [] },
    ],
  },
];
const printName = (person) => {
  person.forEach((element, index) => {
    // console.log(index, element);
    console.log(element.name);
    if (element?.children?.length === 0) {
      return;
    } else {
      printName(element?.children);
    }
  });
};
printName(data);
