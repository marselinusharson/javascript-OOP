class Employee {
  constructor(firstname) {
    this.firstname = firstname;
  }
  sayHello(name) {
    console.info(`Hello ${name} my name is employee ${this.firstname}`);
  }
}

//wajib memanggil constructor dari parent
//using super keyword

class Manager extends Employee {
  constructor(firstname, lastname) {
    super(firstname);
    this.lastname = lastname;
  }
  sayHello(name) {
    console.info(`Hello ${name} my name is Manager ${this.firstname} ${this.lastname}`);
  }
}

const dinda = new Employee("Dinda");
dinda.sayHello("Marsel");

const anjing = new Manager("Marselinus", "Rewo");
anjing.sayHello("dinda");

console.info(dinda);
console.info(anjing);
