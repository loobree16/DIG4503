const Person = require("./Person.js");

class Briana extends Person {
  //Briana is a person
  constructor(name, favoriteColor, favoriteAnimal) {
    super(name, favoriteColor);
    this.favoriteAnimal = favoriteAnimal;
  }
}

module.exports = Briana;
