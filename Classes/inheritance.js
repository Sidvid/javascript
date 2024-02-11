class Animal {
  constructor(name, speed, hide) {
    this.name = name;
    this.speed = speed;
    this.hide = hide;
  }
  getSpeed(currentSpeed) {
    return `${this.name} can run at ${this.speed} but he is running at ${currentSpeed} km/hr`;
  }
  isHide() {
    return `${this.name} can hide : ${this.hide ? "Yes" : "No"}`;
  }
}
class Rabbit extends Animal {
  constructor(name, speed, hide) {
    super(name, speed, hide);
  }
  canJump() {
    return `${this.name} can jump high.`;
  }
}
const rabbit1 = new Rabbit("Rabbit One", 10, true);
console.log(rabbit1.canJump());
