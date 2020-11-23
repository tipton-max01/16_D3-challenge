// @TODO: YOUR CODE HERE!

// // Load data from hours-of-tv-watched.csv
// d3.csv("./hours-of-tv-watched.csv").then(function(tvData) {

//     console.log(tvData);
  

// Load data from data.csv
d3.csv("./data/data.csv").then(function(data) {

    console.log(data);
}).catch(function(error) {
    console.log(error);
});