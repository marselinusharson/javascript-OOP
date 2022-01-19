class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  //tambahkan method di prototype best practicenya:
  sayHello(name) {
    console.info(`Hello ${name}`);
  }
}
const marsel = new Person("marsel", "Rewo");
console.info(marsel);
marsel.sayHello(marsel.firstname);
const dinda = new Person("Dinda", "Juliantari");
console.info(dinda);
dinda.sayHello(dinda.firstname);
