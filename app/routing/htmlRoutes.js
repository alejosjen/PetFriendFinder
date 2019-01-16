var express = require("express");
var router = express.Router();
var path = require("path");

//default route that leads to home.html
router.get("/", function (req, res) {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, "../public/home.html"));
    
});

//GET route to display survey page
router.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

module.exports = router;
