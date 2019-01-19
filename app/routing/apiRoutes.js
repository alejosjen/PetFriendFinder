var express = require("express");
var router = express.Router();
var PetFriends = require("../data/PetFriends.js");

//GET route with url /api/friends  to display JSON of all possible friends
router.get("/api/petfriends", function (req, res) {
  res.json(data);
});
//POST route to /api/friends, post survey results, handle compatibility logic
router.post("/api/results", function (req, res) {
  //variable as object to hold current best PetFriend
  var bestPetFriend;

  // store a single pet score
  var bestPetTotal = 1000;
  //
  var currentPetTotal;
  // store userInput score
  var userInput = req.body
  userInput.scores = userInput.scores.map(score => parseInt(score));
  //Loop through PetFriends
  for (j = 0; j < PetFriends.length; j++) {
    //
    currentPetTotal = 0
    //Looping through their scores
    for (i = 0; i < PetFriends[j].scores.length; i++) {
      //Assigning their scores to be stored for comparison
      currentPetTotal += Math.abs(userInput.scores[i] - PetFriends[j].scores[i]);
    }
    //Compare current friend total against best
    if (currentPetTotal <= bestPetTotal) {
      bestPetFriend = bestPetFriend[j];
      bestPetTotal = currentPetTotal;
    }
  };
  //Add new user
  PetFriends.push(userInput);
  //Send info back
  res.json(bestPetFriend);

  console.log(bestPetFriend);
})

module.exports = router;