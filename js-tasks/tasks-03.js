//https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
const circleCircumference = (circle) => 2 * Math.PI * circle.radius;

//https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
function giveMeFive(obj) {
  const arrayOfIndexesAndValues = [];
  for (const key in obj) {
    if (key.length === 5) arrayOfIndexesAndValues.push(key);
    if (obj[key].length === 5) arrayOfIndexesAndValues.push(obj[key]);
  }
  return arrayOfIndexesAndValues;
}

//https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript
function buildFun(n) {
  const res = [];
  for (let i = 0; i < n; i++) {
    res.push(function () {
      console.log(i);
      return i;
    });
  }
  return res;
}

//https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript
class Shark extends Animal {
  constructor(name, age, status, legs = 0, species = "shark") {
    super(name, age, legs, species, status);
  }
}

class Cat extends Animal {
  constructor(name, age, status, legs = 4, species = "cat") {
    super(name, age, legs, species, status);
  }
  introduce() {
    return super.introduce() + "  Meow meow!";
  }
}

class Dog extends Animal {
  constructor(name, age, status, master, legs = 4, species = "dog") {
    super(name, age, legs, species, status);
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}
