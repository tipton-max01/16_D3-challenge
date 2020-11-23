// @TODO: YOUR CODE HERE!

// set the dimensions and margins of the graph
var margin = {
    top: 10, 
    right: 30, 
    bottom: 30, 
    left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("scatter")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");


// Load data from data.csv
d3.csv("./assets/data/data.csv").then(function(data) {

    console.log(data);

    //log healthcare list
    var healthcare = data.map(data => data.healthcare);
    console.log("healthcare", healthcare);
    var poverty = data.map(data => data.poverty);
    console.log("poverty", poverty);

}).catch(function(error) {
    console.log(error);
});

    // // Add X axis
    // // var x = d3.scaleLinear()
    //     .domain([0, 4000])
    //     .range([ 0, width ]);
    // svg.append("g")
    //     .attr("transform", "translate(0," + height + ")")
    //     .call(d3.axisBottom(x));

    // // Add Y axis
    // // var y = d3.scaleLinear()
    //     .domain([0, 500000])
    //     .range([ height, 0]);
    // svg.append("g")
    //     .call(d3.axisLeft(y));

    // // Add dots
    // svg.append('g')
    //     .selectAll("dot")
    //     .data(data)
    //     .enter()
    //     .append("circle")
    //         .attr("cx", function (d) { return x(d.GrLivArea); } )
    //         .attr("cy", function (d) { return y(d.SalePrice); } )
    //         .attr("r", 1.5)
//     //         .style("fill", "#69b3a2")

// })
