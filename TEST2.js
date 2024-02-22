class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `My name is ${this.name} and my age is ${this.age}`;
  }
}
const p1 = Person("John", 25);
Person.prototype.canVote = function canVote() {
  if (this.age > 18) {
    return `Yes you can vote`;
  }
  return `Ohhh !! you cannot vote `;
};
console.log(p1);
