const Briana = require("./Briana.js");

const chalk = require('chalk');
//create new instance of the object Person

let p = new Briana("Briana", chalk.blue("Blue"), chalk.yellow("Tiger"));
console.log(p.speak());
