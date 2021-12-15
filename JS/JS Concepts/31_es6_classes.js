class Car {
  constructor(mdl, yr, clr) {
    this.model = mdl;
    this.year = yr;
    this.color = clr;
  }

  start() {
    console.log(`${this.model} Started`);
  }

  static add(a, b) {
    console.log(a + b);
  }
}

mycar = new Car("Audi", 2015, "Black");
console.log(mycar);

mycar.start();

// static function call
Car.add(1, 2);

class BMW extends Car {
  constructor(mdl, yr, clr, bmwprice) {
    super(mdl, yr, clr);
    this.price = bmwprice;
  }
}
