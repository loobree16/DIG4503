const chalk = require('chalk');

class Person {

  constructor(name, favoriteColor){
    this.name = name;
    this.favoriteColor = favoriteColor;
    //name and color are now properties of Person

  }

  speak() {
    return(`My name is ${this.name}, my favorite color is ${this.favoriteColor}, and my favorite animal is a ${this.favoriteAnimal}`);
  }

}

module.exports = Person;
//when we create this object it will have the properties name and color
