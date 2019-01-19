var express = require("express");
var router = express.Router();
var PetFriends = require("../data/PetFriends.js");

//GET route with url /api/friends  to display JSON of all possible friends
router.get("/api/petfriends", function (req, res) {
  res.json(data);
});
//POST route to /api/friends, post survey results, handle compatibility logic
router.post("/api/results", function (req, res) {
  // req.body.params
  //variable as object to hold current best PetFriend
  var bestPetFriend = {
    "name": "",
    "photo": "",
    "scores": 0
  };

  // store a single pet score
  var currentPetTotal;

  //Loop through PetFriends
  for (j = 0; j < PetFriends.length; j++) {
    //Looping through their scores
    for (i = 0; i < PetFriends.scores.length; i++) {
      //Assigning their scores to be stored for comparison
      currentPetTotal += PetFriends.scores[i];
      if (userInput <= currentPetTotal) {
        bestPetFriend = {
          name: PetFriends[j].name,
          photo: PetFriends[j].photo,
          scores: PetFriends[j].scores
        }
        res.json(bestPetFriend);
      }
    }
  };


  console.log(currentPetTotal)
  // if (userInput <= bestPetFriendScore) {

  // }
  //1st main loop, go through PetFriends, loop scores, add scores, store the score in the variable, 
  //if statement to compare stored score of user to the PetFriends with <= best matched score
  //2nd main loop to score user's input 

})
//use math.abs
module.exports = router;