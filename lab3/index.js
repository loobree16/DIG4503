const Express = require("express");
const App = Express();
const port = 80;

App.use(Express.static("public"));

//App.use("/anotherFolder", Express.static("anotherFolder"));

//express handles request in order they get them. It got to above req first so it will only display above.



App.listen(port, () => {
    console.log("Server Running");
});


