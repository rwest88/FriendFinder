// ===============================================================================
// DATA
// Below array will hold all of the user objects.
// Initially we just set it equal to a "dummy".
// But you could have it be an empty array as well.
// ===============================================================================

var friends = [
  {
    "name": "Fern",
    "photo": "https://rwest88.github.io/Basic-Portfolio/assets/images/fern.jpg",
    "scores": [5, 1, 4, 4, 5, 1, 2, 5, 4, 4]
  },
  {
    "name": "Ryan",
    "photo": "https://rwest88.github.io/conduct.png",
    "scores": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  },
  {
    "name": "Brett",
    "photo": "http://www.profootballhof.com/assets/1/26/DimRelated/favre-brett-3.jpg?59036",
    "scores": [4, 4, 2, 3, 2, 4, 4, 4, 3, 3]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;
