//ES6 menyediakan class untuk mendukung inheritance yang lebih efisien

//using  extends keyword
class Employee {

  sayHello(name) {
    console.info(`Hello ${name} my name is employee ${this.firstname}`);
  }
}
//class inheritance
class Manager  extends Employee{
  sayHello(name) {
    console.info(`Hello ${name} my name is Manager ${this.firstname}`);
  }
}

const hinata = new Employee();
hinata.firstname = "hinata";
hinata.sayHello("Marsel");

const ino = new Manager();
ino.firstname = "ino";
ino.sayHello("hinata");

console.info(hinata);
console.info(ino);
