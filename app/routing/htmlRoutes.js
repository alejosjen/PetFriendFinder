//default route that leads to home.html
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

//GET route to display survey page
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});