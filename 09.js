//Create an object representing a car with properties like make, model and year. Add a method to the car object to start the engine.
let car = {
  make: "Jaguar",
  model: "F-Pace",
  year: 2024,
};

car.startEngine = function () {
  console.log("Engine start");
};

car.startEngine();
