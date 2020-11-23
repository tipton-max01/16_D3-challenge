// @TODO: YOUR CODE HERE!

// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;





// Load data from data.csv
d3.csv("./assets/data/data.csv").then(function(data) {

    console.log(data);
}).catch(function(error) {
    console.log(error);
});