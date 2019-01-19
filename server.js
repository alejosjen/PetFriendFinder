// Dependencies
// ===========================================================
var express = require("express");
var apiRoutes = require("./app/routing/apiRoutes.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js");


var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(htmlRoutes);
app.use(apiRoutes);

//-----Listening------
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });