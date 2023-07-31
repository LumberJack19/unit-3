//SVG dimension variables
var w = 900, h = 500;

// Create a container only once
var container = d3.select("body") //get the <body> element from the DOM
    .append("svg") //put a new svg in the body
    .attr("width", w) //assign the width
    .attr("height", h) //assign the height
    .attr("class", "container") //always assign a class (as the block name) for styling and future selection
    .style("background-color", "rgba(0,0,0,0.2)"); //only put a semicolon at the end of the block!

var cityPop = [
    { 
        city: 'Madison',
        population: 233209
    },
    {
        city: 'Milwaukee',
        population: 594833
    },
    {
        city: 'Green Bay',
        population: 104057
    },
    {
        city: 'Superior',
        population: 27244
    }
];

//find the minimum value of the array
var minPop = d3.min(cityPop, function(d){
    return d.population;
});

//find the maximum value of the array
var maxPop = d3.max(cityPop, function(d){
    return d.population;
});

// Create scale generators
var x = d3.scaleLinear()
    .range([90, 810]) //output min and max
    .domain([0, 3]); //input min and max

var y = d3.scaleLinear()
    .range([440, 95])
    .domain([
        minPop,
        maxPop
    ]);

var color = d3.scaleLinear()
    .range([
        "#FDBE85",
        "#D94701"
    ])
    .domain([
        minPop, 
        maxPop
    ]);

// Create axis
var yAxis = d3.axisLeft(y);
var axis = container.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(50, 0)")
    .call(yAxis);

// Create circles
var circles = container.selectAll(".circles") //create an empty selection
    .data(cityPop) //here we feed in an array
    .enter() //one of the great mysteries of the universe
    .append("circle") //inspect the HTML--holy crap, there's some circles there
    .attr("class", "circles")
    .attr("id", function(d){
        return d.city;
    })
    .attr("r", function(d){
        //calculate the radius based on population value as circle area
        var area = d.population * 0.01;
        return Math.sqrt(area/Math.PI);
    })
    .attr("cx", function(d, i){
        //use the index to place each circle horizontally
        return 90 + (i * 180);
    })
    .attr("cy", function(d){
        //subtract value from 450 to "grow" circles up from the bottom instead of down from the top of the SVG
        return 450 - (d.population * 0.0005);
    })
    .style("fill", function(d, i){ //add a fill based on the color scale generator
        return color(d.population);
    });

// Create labels
var labels = container.selectAll(".labels")
    .data(cityPop)
    .enter()
    .append("text")
    .attr("class", "labels")
    .attr("text-anchor", "left")
    .attr("y", function(d){
        //vertical position centered on each circle
        return y(d.population) + 5;
    });

// Create a format generator
var format = d3.format(",");

// Create name line
var nameLine = labels.append("tspan")
    .attr("class", "nameLine")
    .attr("x", function(d,i){
        //horizontal position to the right of each circle
        return x(i) + Math.sqrt(d.population * 0.01 / Math.PI) + 5;
    })
    .text(function(d){
        return d.city;
    });

// Create population line
var popLine = labels.append("tspan")
    .attr("class", "popLine")
    .attr("x", function(d,i){
        //horizontal position to the right of each circle
        return x(i) + Math.sqrt(d.population * 0.01 / Math.PI) + 5;
    })
    .text(function(d){
        return "Pop. " + format(d.population); //use format generator to format numbers
    });
