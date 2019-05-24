// Requiring our models
var db = require("../models");

module.exports = function (app) {

  // Get all the input
  app.get("/api/pets", function (req, res) {
    db.Pet.findAll({}).then(function (dbPet) {
      res.json(dbPet);
    });
  });

  // Create a new input
  app.post("/api/pets", function (req, res) {

    db.Pet.findAll().then(function (dbPet) {
      // logic to determine match


      var userInput = req.body;

      for (var i = 0; i < userInput.scores.length; i++) {
        userInput.scores[i] = parseInt(userInput.scores[i]);
      }

      // default friend match is the first friend but result will be whoever has the minimum difference in scores
      var bestFriendIndex = 0;
      var minimumDifference = 40;
      //  whatever the difference is, add to the total difference
      for (var i = 0; i < friends.length; i++) {
        var totalDifference = 0;
        for (var j = 0; j < friends[i].scores.length; j++) {
          var difference = Math.abs(userInput.scores[j] - friends[i].scores[j]);
          totalDifference += difference;
        }

        // if there is a new minimum, change the best friend index and set the new minimum for next iteration comparisons
        if (totalDifference < minimumDifference) {
          bestFriendIndex = i;
          minimumDifference = totalDifference;
        }
      }

      // after finding match, add user to friend array
      friends.push(userInput);

      // send back to browser the best friend match
      res.json(friends[bestFriendIndex]);
    });
  });
}