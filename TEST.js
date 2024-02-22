Function.prototype.myCall = function (context, args) {
  console.log(context);
};
const person = {
  name: "sid",
};
const test = (name) => {
  return `My name is ${this.name} ${name}`;
};
test.myCall(person, "Siddhartha");
