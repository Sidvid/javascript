function callMyName() {
  return `MY name is ${this.name} `;
}
const personObj = {
  name: "Mike",
  renderName: callMyName,
};
console.log(personObj.renderName()); // MY name is Mike , We are calling this callMyName inside personObj so renderName has access to name: Mike
const renderNameOutside = personObj.renderName;
console.log(renderNameOutside()); // MY name is undefined , because  it doesn't have a context of 'personObj'. To tackle this we have to use bind
console.log("--------------XXXXXXX---------------");

// -----------------------------------------------------------------xxxx---------------------------------------------------------
this.name = "Global User";
const userOne = {
  name: "User One",
  getName: function () {
    return `My name is ${this.name}`;
  },
};
const userTwo = {
  name: "User Two",
  getName: userOne.getName,
};
const userTest = userOne.getName;

console.log(userTest()); //My name is Global user , because we are calling this in global context
console.log(userTwo.getName()); //My name is User Two , because we are calling getName in userTwo object not in userOne object so we are getting this
