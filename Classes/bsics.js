class Person {
  _color = "black";
  constructor(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
  }
  // This will be saved in prototype of Person Object
  // this here refer to Person Object
  getDetails() {
    return `Name : ${this.name} \n Age:${this.age}\n Height:${this.height} color:${this._color}`;
  }
}
const p1 = new Person("John", 25, 180);
console.log(p1);
console.log(p1.getDetails());
