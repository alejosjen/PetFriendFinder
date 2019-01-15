//GET route with url /api/friends  to display JSON of all possible friends
app.get("/api/friends", function(req, res) {
    res.json(data);
  });
//POST route to /api/friends, post survey results, handle compatibility logic