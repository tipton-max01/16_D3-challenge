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
    //log poverty list
    var poverty = data.map(data => data.poverty);
    console.log("poverty", poverty);

    // scale y to chart height
    var yScale = d3.scaleLinear()
    .domain([0, d3.max(healthcare)])
    .range([height, 0]);

    // scale x to chart width
    var xScale = d3.scaleLinear()
    .domain([0, d3.max(poverty)])
    .range([0, width]);

    // create axes
    var yAxis = d3.axisLeft(yScale);
    var xAxis = d3.axisBottom(xScale);

    // // Add X axis
    xAxis = d3.scaleLinear()
        .domain([0, 4000])
        .range([ 0, width ]);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xAxis));

    // // Add Y axis
    yAxis = d3.scaleLinear()
        .domain([0, 500000])
        .range([ height, 0]);
    svg.append("g")
        .call(d3.axisLeft(yAxis));

    // Add a tooltip div. Here I define the general feature of the tooltip: stuff that do not depend on the data point.
    // Its opacity is set to 0: we don't see it by default.
    // var toolTip = d3.select("scatter")
    //     .append("div")
    //     .style("opacity", 50)
    //     .attr("class", "tooltip")
    //     .style("background-color", "white")
    //     .style("border", "solid")
    //     .style("border-width", "1px")
    //     .style("border-radius", "5px")
    //     .style("padding", "10px")

    var toolTip = d3.select("scatter")
    .append("div")
        .attr("class", "tooltip")

    // Add dots
    svg.append('g')
        .selectAll("dot")
        .data(data)
        .enter()
        .append("circle")
            .attr("cx", function (d) { return x(d.poverty); } )
            .attr("cy", function (d) { return y(d.healthcare); } )
            .attr("r", 1.5)
            .style("fill", "#69b3a2")



// {/* <img src="/static/image.svg"> */}


    }).catch(function(error) {
            console.log(error);
});