class Car {
    constructor(make, speed) {
      this.make = make;
      this.speedKmH = speed;
    }
  
    // Геттер для получения скорости в милях в час
    get speedUS() {
      return this.speedKmH / 1.6;
    }
  
    // Сеттер для установки скорости в милях в час
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
  
  // Создаем новый автомобиль
  const car1 = new Car("Форд", 120);
  
  // Используем геттер для получения текущей скорости в милях в час
  console.log(`Текущая скорость автомобиля ${car1.make} в милях в час: ${car1.speedUS}`);
  
  // Используем сеттер для установки новой скорости в милях в час
  car1.speedUS = 75;
  console.log(`Установленная скорость автомобиля ${car1.make} в милях в час: ${car1.speedUS}`);
  
  // Используем методы ускорения и торможения
  car1.accelerate(30);
  car1.brake(20);
  
  // Проверяем, как изменилась скорость после ускорения и торможения
  console.log(`Текущая скорость автомобиля ${car1.make} после ускорения и торможения в милях в час: ${car1.speedUS}`);
  