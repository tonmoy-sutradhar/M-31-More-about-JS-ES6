class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sleep() {
    console.log(`Sleeping now ${this.name}`);
  }
}

const kodom = new Person("Kodom Alli", 50);
console.log(kodom);
console.log(kodom.age);
kodom.sleep();
