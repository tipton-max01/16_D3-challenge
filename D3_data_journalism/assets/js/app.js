
// @TODO: YOUR CODE HERE!

// set the dimensions and margins of the graph
var svgWidth = 800;
var svgHeight = 500;

var margin = {
    top: 50,
    right: 50,
    bottom: 50,
    left: 50
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
    data.healthcare = +data.healthcare;
    data.poverty = +data.poverty;
    console.log(data);

    // Step 2: Create scale functions
    var xScale = d3.scaleLinear()
        .domain([17, d3.max(data, d => d.poverty)])
        .range([0, width]);

    var yScale = d3.scaleLinear()
        .domain([4.4, d3.max(data, d => d.healthcare)])
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
        .attr("cx", d => xScale(d.poverty), )
        .attr("cy", d => yScale(d.healthcare))
        .attr("r", "10")
        .attr("fill", "lightblue")
        .attr("opacity", ".5");
    
    // Step 6: Initialize tool tip
    var toolTip = d3.tip()
        .attr("class", "d3-tip")
        .offset([80, -60])
        .style("position", "absolute")
        .style("pointer-events", "none")
        .html(function(d) {
            return (`${d.state}<br>In Poverty (%): ${d.poverty}<br>Lacks Healthcare (%): ${d.healthcare}`)
        });      

    // Step 7: Create tooltip in the chart
    chartGroup.call(toolTip);

    // Create axes labels
    chartGroup.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left + 0)
      .attr("x", 0 - (height / 2))
      .attr("dy", "1em")
      .attr("class", "axisText")
      .text("Lacks Healthcare (%)");
    
    chartGroup.append("text")
      .attr("transform", `translate(${width / 2}, ${height + margin.top + 10})`)
      .attr("class", "axisText")
      .text("In Poverty (%)");
      

    }).catch(function(error) {
            console.log(error);
});