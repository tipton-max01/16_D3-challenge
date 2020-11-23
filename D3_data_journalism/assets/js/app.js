// @TODO: YOUR CODE HERE!

// set the dimensions and margins of the graph
var svgWidth = 960;
var svgHeight = 500;

var margin = {
    top: 10, 
    right: 30, 
    bottom: 30, 
    left: 60
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#scatter")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Load data from data.csv
d3.csv("./assets/data/data.csv").then(function(data) {

    console.log(data);

    //log healthcare list
    var healthcare = data.map(data => data.healthcare);
    console.log("healthcare", healthcare);
    //log poverty list
    var poverty = data.map(data => data.poverty);
    console.log("poverty", poverty);

    // Step 2: Create scale functions
    var xScale = d3.scaleLinear()
        .domain([20, d3.max(poverty)])
        .range([0, width]);

    var yScale = d3.scaleLinear()
        .domain([0, d3.max(healthcare)])
        .range([height, 0]);

    // Step 3: Create axis functions
    var xAxis = d3.axisBottom(xScale);
    var yAxis = d3.axisLeft(yScale);

    // Step 4: Append Axes to the chart
    chartGroup.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(xAxis);
        
    chartGroup.append("g")
        .call(yAxis);

    // Step 5: Create Circles
    var circlesGroup = chartGroup.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", xScale(poverty))
    .attr("cy", yScale(healthcare))
    .attr("r", "15")
    .attr("fill", "pink")
    .attr("opacity", ".5");

    var toolTip = d3.select("scatter")
    .append("div")
        .attr("class", "tooltip")



// {/* <img src="/static/image.svg"> */}


    }).catch(function(error) {
            console.log(error);
});