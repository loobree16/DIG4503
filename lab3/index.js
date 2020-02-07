const Express = require("express");
const App = Express();
const port = 80;

App.use("/public", Express.static("public"));

App.use("/", (req, res) => {
    res.send("Hi");
});

//express handles request in order they get them. It got to above req first so it will only display above.



App.listen(port, () => {
    console.log("Server Running");
});


