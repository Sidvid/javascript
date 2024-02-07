const personObject = {
  name: "John",
  greetHim: function (person) {
    return `Hii my ${this.name} name is ${person} `;
  },
};
const outsideGreet = personObject.greetHim;
console.log(outsideGreet("Mike")); // Hii my undefined name is Mike
// to fix this issue we need to  bind the method to the object using call or apply methods
// Now we will bind this method
const outsideGreetBind = personObject.greetHim.bind(personObject); // we are bind the refernce of personObject here to greetHim method
console.log(outsideGreetBind("Hussy")); // Hii my John name is Hussy , outsideGreetBind has access to name:john via .bind method
console.log("--------------XXXXXXX---------------");

// -----------------------------------------------------------------xxxx---------------------------------------------------------

// Same we have to do for call and apply
const person = {
  name: "rohit",
};
function callName() {
  return `My name is ${this.name}`; // As this here is referring to window object and window object doest not have any name init so this.name is undefined here
}
console.log(callName()); // My name is undefined
// Now to fix this we have to use call and apply method
console.log(callName.apply(person)); //My name is rohit
// Here what we have did is that we gave the refernce of person object through call , apply
