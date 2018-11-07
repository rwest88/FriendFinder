// ===============================================================================
// LOAD DATA
// We are linking our routes to a "data" source, which holds an array of users.
// ===============================================================================

var friends = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  // API GET Requests
  // Below code handles when users "visit" a page.
  // When a user visits a link, they are shown a JSON of the data in the table
  // ---------------------------------------------------------------------------
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the  JavaScript array
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    var userData = req.body;
    var bestMatch = {friendDifference: 100};

    for (i in friends) {
      var totalDifference = 0;
      console.log(friends[i]);

      for (j in friends[i].scores) {
        totalDifference += Math.abs(userData.scores[j] - friends[i].scores[j]);
      }

      if (totalDifference <= bestMatch.friendDifference) {
        bestMatch.name = friends[i].name;
        bestMatch.photo = friends[i].photo;
        bestMatch.friendDifference = totalDifference;
      }
    }
    friends.push(userData);
    res.json(bestMatch);
  });

  // "secret" GET route
  app.get("/api/clear", function(req, res) {
    // Empty out the array, send to client
    res.json(friends = []);
  });
};