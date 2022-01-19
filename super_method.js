class Shape {
  paint() {
    console.info("paint shape");
  }
}
class Circle extends Shape {
  paint() {
    super.paint();
    console.info("paint circle");
  }
}


const bro = new Shape()
const circle = new Circle()
circle.paint()
console.info(bro)
console.info(circle)
