function myFun() {
  console.log("this inside conventional function", this);
}
const myFunArrow = () => {
  console.log("this inside the arrow function ", this);
};
// Both will refer to WINDOW object
myFun(); // "this" refers to global object (usually window in browser)
myFunArrow(); // "this" also refers to global object because it is an arrow
console.log("--------------XXXXXXX---------------");

// -----------------------------------------------------------------xxxx---------------------------------------------------------

this.name = "Global Siddhartha";
const myObj = {
  name: "sid",
  tellMyNameArrow: () => {
    return `Your name is ${this.name}`;
  },
  tellMyNameConv: function () {
    return `Your name is ${this.name}`;
  },
};
console.log(myObj.tellMyNameArrow()); // this will  refer to the global object i.e window in browser environment
console.log(myObj.tellMyNameConv()); // this will refer to name inside the object

console.log("--------------XXXXXXX---------------");

// -----------------------------------------------------------------xxxx---------------------------------------------------------

const personObject = {
  name: "John",
  greetHim: function (person) {
    return `Hii my ${this.name} name is ${person} `;
  },
};
console.log(personObject.greetHim("Siddhartha")); // this  will refer to John as we are calling from John's method , see here we are calling greetHim inside the object so this will refer to object itself so it is picking name = john
const outsideGreet = personObject.greetHim; // here we are not calling greetHim function , what we are doing we are just saving the greetHim inside ousideGreet varianle , this will result in losing the lexical scope of the greetHim function and which result in losing the access to john because now we will call this outside i.e. in window object

console.log(outsideGreet("Mike")); // Hii my undefined name is Mike , because we loose access to name:john here as we are calling this outside
// the soltion for this is , we have to go for expicit binding ...........
