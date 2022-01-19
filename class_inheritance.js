//ES6 menyediakan class untuk mendukung inheritance yang lebih efisien

//using  extends keyword
class Employee {

  sayHello(name) {
    console.info(`Hello ${name} my name is employee ${this.firstname}`);
  }
}
//class inheritance
class Manager extends Employee {
  sayHello(name) {
    console.info(`Hello ${name} my name is Manager ${this.firstname}`);
  }
}

const dinda = new Employee();
dinda.firstname = "dinda";
dinda.sayHello("Marsel");

const anjing = new Manager();
anjing.firstname = "anjing";
anjing.sayHello("dinda");

console.info(dinda);
console.info(anjing);
