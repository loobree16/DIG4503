const Express = require("express");
const App = Express();
const port = 8080;
const Person = require("./Person.js");

let p = new Person ("Briana", "blue");

App.get("/", (req, res) => {
   res.send('<form action="localhost:8080" method="post"><input type="text" name="example"><button>Submit</button></form>'); 
   console.log(req);
});

App.get("/color", (req, res) => {
    res.send(p.color);
});

App.get("/name", (req, res) => {
    res.send(p.name);
});

App.listen(port, () => {
    console.log("Server Running");
});

//Route: method + path + response 
/* App.get("/", function(req, res) {
    res.send(...)
});

client <--> server  <--> express

Express.static(  )

expressExample
-> index.js
-> package.json
-> package-lock.json
-> static 
    -> index.html

*/