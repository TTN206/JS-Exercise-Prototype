/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
    this.name = name;
    this.isFlying = false;
  }
  Airplane.prototype.takeOff = function () {
    this.isFlying = true;
  };
  Airplane.prototype.land = function () {
    this.isFlying = false;
  };
  
  
  /*
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  */
  
  /*
    TASK 1
      - Write a Person Constructor that initializes `name` and `age` from arguments.
      - All instances of Person should initialize with an empty `stomach` array.
      - Give instances of Person the ability to `.eat("someFood")`:
          + When eating an edible, it should be pushed into the `stomach`.
          + The `eat` method should have no effect if there are 10 items in the `stomach`.
      - Give instances of Person the ability to `.poop()`:
          + When an instance poops, its `stomach` should empty.
      - Give instances of Person a method `.toString()`:
          + It should return a string with `name` and `age`. Example: "Mary, 50"
  */
  
function Person(paraName, paraAge) { // Constructor that initializes `name` and `age` from arg
    this.stomach = []; //initialize with an empty `stomach` array
    this.name = paraName; // the 'this' equated to the each arg
    this.age = paraAge
  }
Person.prototype.eat = function(item){ // prototype ability to eat
  if(this.stomach.length <= 10){ // eat method should have no effect if there are 10 items in the `stomach` so push
    this.stomach.push(item);
  }else{
    return `You need to SHIT BEFORE YOU CAN EAT! ~your BootyHole `
  }
  // console.log("SomeFood");
}
Person.prototype.poop = function(){ //Person the ability to `.poop()
  this.stomach = []; //`stomach` should empty.
}
Person.prototype.toString = function(){ // a method `.toString()`:
  return `${this.name},${this.age}`; // return a string with `name` and `age`
}
  
  /*
    TASK 2
      - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
      - All instances built with Car:
          + should initialize with an `tank` at 0
          + should initialize with an `odometer` at 0
      - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
      - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
          + Should cause the `odometer` to go up.
          + Should cause the `tank` to go down taking `milesPerGallon` into account.
      - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
          + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
  */
  
function Car(model, milesPerGallon) { // initializes `model` and `milesPerGallon` from arg
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0; // initialize with an `tank` at 0
  this.odometer = 0; // initialize with an `odometer` at 0
}
Car.prototype.fill = function(gallons){ // cars the ability to get fueled with a `.fill(gallons)` method
  this.tank += gallons;  // Add the gallons to `tank`
}
Car.prototype.drive = function(distance){ // cars ability to `.drive(distance)
  this.odometer += distance; // cause the `odometer` to go up
  this.tank -= distance/this.milesPerGallon; // cause the `tank` to go down taking `milesPerGallon` into account  //milesPerGallon*(gallons/distance) NOT THIS! 
    
  if(this.tank.length === 0){  // runs out of `fuel`
    return `I ran out of fuel at ${this.odometer} miles!"`; // return a string "I ran out of fuel at x miles!"
    }else{
    this.tank -= distance/this.milesPerGallon;
    }
}           


  
  /*
    TASK 3
      - Write a Baby constructor subclassing Person.
      - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
      - Besides the methods on Person.prototype, babies have the ability to `.play()`:
          + Should return a string "Playing with x", x being the favorite toy.
  */
function Baby(paramName,paramAge,paramToy){
    Person.call(this, paramName, paramAge); // pulling all params from Person
  this.favoriteToy = paramToy; // initializing favoriteToy
}

Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function(){ //.play equaling a func or the str
  return `Playing with ${this.favoriteToy}`; //triple check your param and such for caps error/ s's
}

  
  /* 
    TASK 4
    In your own words explain the four principles for the "this" keyword below:

    1. Window Binding - 

    2. Explicit Binding - 

    3. Implicit Binding - 

    4. New Binding - 
  */
  
  
  ///////// END OF CHALLENGE /////////

  /* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
    return 'bar';
}

export default{
    foo,
    Person, 
    Car,
    Baby
}