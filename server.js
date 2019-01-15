// Dependencies
// ===========================================================
var express = require("express");
var path = require("path");
var PetFriends = require("./PetFriends");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//-----Routes-------
//Routes for HTML
//GET route to home.html
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});
//GET route to survey.html
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});

//Routes for API
//GET route to display JSON of all possible pet friends
app.get("/api/PetFriends", function(req, res) {
    res.json(data);
  });

//-----Listening------
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });