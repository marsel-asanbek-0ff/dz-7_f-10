class Car {
    constructor(make, speed) {
      this.make = make;
      this.speedKmH = speed;
    }
  
    get speedUS() {
      return this.speedKmH / 1.6;
    }
  
    set speedUS(speed) {
      this.speedKmH = speed * 1.6;
    }
  
    accelerate(increment) {
      this.speedKmH += increment;
      console.log(`Скорость автомобиля ${this.make} увеличена на ${increment} км/ч.`);
    }
  
    brake(decrement) {
      this.speedKmH -= decrement;
      console.log(`Скорость автомобиля ${this.make} уменьшена на ${decrement} км/ч.`);
    }
  }
  
  const car1 = new Car("Форд", 120);
  
  console.log(`Текущая скорость автомобиля ${car1.make} в милях в час: ${car1.speedUS}`);
  
  car1.speedUS = 75;
  console.log(`Установленная скорость автомобиля ${car1.make} в милях в час: ${car1.speedUS}`);
  
  car1.accelerate(30);
  car1.brake(20);
  
  
  console.log(`Текущая скорость автомобиля ${car1.make} после ускорения и торможения в милях в час: ${car1.speedUS}`);
  