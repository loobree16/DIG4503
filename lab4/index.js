const Express = require("express");
const App = Express();
const chalk = require("chalk");
const port = 80;

const getPokemons = require("json-pokemon");

App.get("/id/:id", (req, res) => {
    let result = {"error": "Could not find!"}

    getPokemons.forEach((value) => {
        if(value.id == req.params.id) {
            
            result=value;
        }
    });
    if(result.error) {
        console.log(chalk.red("That Pokemon does not exist!"));
        console.log(chalk.red(req.path));
        
    } else {
        console.log(chalk.green("You found a Pokemon!"));
        console.log(chalk.green(req.path));
    }
    res.send(result);
});

App.get("/name/:name", (req, res) => {
    let result = {"error": "could not find"}

    getPokemons.forEach((value) => {
        if(value.name.toLowerCase() == req.params.name) {
            
            result = value;
            
        }
    });
    if (result.error) {
        console.log(chalk.red("That Pokemon does not exist!"));
        console.log(chalk.red(req.path));
    
    } else {
        console.log(chalk.green("You found a Pokemon!"));
        console.log(chalk.green(req.path));
    }
    res.send(result);
});


App.listen(port, () => {
    console.log("Server Running!");
});



///id/:id , /name/:name