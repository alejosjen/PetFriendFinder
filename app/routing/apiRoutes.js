var express = require("express");
var router = express.Router();
var petFriends = require("./app/data/PetFriends.js");

//GET route with url /api/friends  to display JSON of all possible friends
router.get("/api/friends", function(req, res) {
    res.json(data);
  });
//POST route to /api/friends, post survey results, handle compatibility logic

module.exports = router;