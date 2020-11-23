// @TODO: YOUR CODE HERE!

// Load data from data.csv
d3.csv("./assets/data/data.csv").then(function(data) {

    console.log(data);
}).catch(function(error) {
    console.log(error);
});