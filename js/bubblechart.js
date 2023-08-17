// This function is responsible for creating the Leaflet map
var map;
var minValue;

//Example 1.1 line 3...container block
var container = d3.select("body") //get the <body> element from the DOM
.append("svg") //put a new svg in the body

//SVG dimension variables
var w = 900, h = 500;

//Example 1.2 line 1...container block
var container = d3.select("body") //get the <body> element from the DOM
.append("svg") //put a new svg in the body
.attr("width", w) //assign the width
.attr("height", h) //assign the height
.attr("class", "container") //always assign a class (as the block name) for styling and future selection

//Example 1.3 line 4...container block
var container = d3.select("body") //get the <body> element from the DOM
.append("svg") //put a new svg in the body
.attr("width", w) //assign the width
.attr("height", h) //assign the height
.attr("class", "container") //assign a class name
.style("background-color", "rgba(0,0,0,0.2)"); //only put a semicolon at the end of the block!

//Example 1.4 line 1...container block
var container = d3.select("body") //get the <body> element from the DOM
.append("svg") //put a new svg in the body
.attr("width", w) //assign the width
.attr("height", h) //assign the height
.attr("class", "container") //assign a class name
.style("background-color", "rgba(0,0,0,0.2)") //svg background color
.append("rect") //add a <rect> element
.attr("width", 800) //rectangle width
.attr("height", 400) //rectangle height

//Example 1.5 line 1...container block
var container = d3.select("body") //get the <body> element from the DOM
.append("svg") //put a new svg in the body
.attr("width", w) //assign the width
.attr("height", h) //assign the height
.attr("class", "container") //assign a class name
.style("background-color", "rgba(0,0,0,0.2)"); //svg background color

//Example 1.6 line 9...innerRect block
var innerRect = container.append("rect") //put a new rect in the svg
.datum(400)
.attr("width", 800) //rectangle width
.attr("height", 400) //rectangle height

console.log(innerRect);

//Example 1.7 line 1...innerRect block
var innerRect = container.append("rect") //put a new rect in the svg
.datum(400) //a single value is a datum
.attr("width", function(d){ //rectangle width
return d * 2; //400 * 2 = 800
}) 
.attr("height", function(d){ //rectangle height
return d; //400
})

//Example 1.8 line 1...innerRect block
var innerRect = container.append("rect")
.datum(400) //a single value is a DATUM
.attr("width", function(d){ //rectangle width
return d * 2; //400 * 2 = 800
})
.attr("height", function(d){ //rectangle height
return d; //400
})
.attr("class", "innerRect") //class name
.attr("x", 50) //position from left on the x (horizontal) axis
.attr("y", 50) //position from top on the y (vertical) axis
.style("fill", "#FFFFFF"); //fill color

//below Example 1.9
var dataArray = [10, 20, 30, 40, 50];

//innerRect block
var innerRect = container.append("rect") //put a new rect in the svg
.attr("width", 800) //rectangle width
.attr("height", 400) //rectangle height

// <rect> is now the operand of the container block

//execute script when window is loaded
window.onload = function(){

var container = d3.select("body") //get the <body> element from the DOM

};

//Example 2.3 line 1
var dataArray = [10, 20, 30, 40, 50];

var circles = container.selectAll(".circles") //but wait--there are no circles yet!
.data(dataArray) //here we feed in an array
.enter() //one of the great mysteries of the universe

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

//Example 2.4 line 1
var dataArray = [10, 20, 30, 40, 50];

var circles = container.selectAll(".circles") //but wait--there are no circles yet!
    .data(dataArray) //here we feed in an array
    .enter() //one of the great mysteries of the universe
    .append("circle") //add a circle for each datum
    .attr("class", "circles") //apply a class name to all circles

//Example 2.5 line 1
var dataArray = [10, 20, 30, 40, 50];

var circles = container.selectAll(".circles") //but wait--there are no circles yet!
    .data(dataArray) //here we feed in an array
    .enter() //one of the great mysteries of the universe
    .append("circle") //add a circle for each datum
    .attr("class", "circles") //apply a class name to all circles
    .attr("r", function(d, i){ //circle radius
        console.log("d:", d, "i:", i); //let's take a look at d and i
        return d;
    })
    .attr("cx", function(d, i){ //x coordinate
        return 70 + (i * 180);
    })
    .attr("cy", function(d){ //y coordinate
        return 450 - (d * 5);
    });

 console.log()
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
    //Example 2.6 line 3
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
    });

    //above Example 2.8 line 20
        //color scale generator 
        var color = d3.scaleLinear()
        .range([
            "#FDBE85",
            "#D94701"
        ])
        .domain([
            minPop, 
            maxPop
        ]);

    //find the minimum value of the array
    var minPop = d3.min(cityPop, function(d){
        return d.population;
    });

    //find the maximum value of the array
    var maxPop = d3.max(cityPop, function(d){
        return d.population;
    });

    //scale for circles center y coordinate
    var y = d3.scaleLinear()
        .range([440, 95])
        .domain([
            minPop,
            maxPop
        ]);
        
    /*var y = d3.scaleLinear()
    .range([450, 50]) //was 440, 95
    .domain([0, 700000]); //was minPop, maxPop */

    //Example 2.8 line 34
    x.attr("cx", function(d, i){
        //use the scale generator with the index to place each circle horizontally
        return x(i);
    })

    //Example 2.8 line 38
    .attr("cy", function(d){
        return y(d.population);
    });

var x = d3.scaleLinear() //create the scale
    .range([90, 810]) //output min and max
    .domain([0, 3]); //input min and max
    
function calcMinValue(data){
    //create empty array to store all data values
    var allValues = [];
    //loop through each city
    for(var city of data.features){
        //loop through each enplanement
        for(var emp = 2020; emp <= 2021; emp+=1){
              //get population for current emp
              var value = city.properties["Pop_"+ String(emp)];
              //add value to array
              allValues.push(value);
        }
    }
    //get minimum value of our array
    var minValue = Math.min(...allValues)

    return minValue;
}

//calculate the radius of each proportional symbol
function calcPropRadius(attValue) {
    //constant factor adjusts symbol sizes evenly
    var minRadius = 5;
    //Flannery Apperance Compensation formula
    var radius = 1.0083 * Math.pow(attValue/minValue,0.5715) * minRadius

    return radius;
};

    //For each feature, determine its value for the selected attribute
    var attValue = Number(feature.properties[attribute]);

    //Give each feature's circle marker a radius based on its attribute value
    options.radius = calcPropRadius(attValue);

    //create circle marker layer
    var layer = L.circleMarker(latlng, options);

    //build popup content string starting with city...Example 2.1 line 24
    var popupContent = "<p><b>Airport:</b> " + feature.properties.Airport + "</p>";

    //add formatted attribute to popup content string
    var emp = attribute.split("_")[1];
    popupContent += "<p><b>Enplanements in " + emp + ":</b> " + feature.properties[attribute] + " landing</p>";

    //bind the popup to the circle marker
    layer.bindPopup(popupContent, {
          offset: new L.Point(0,-options.radius)
      });

    //return the circle marker to the L.geoJson pointToLayer option
    return layer;

function createPropSymbols(data){
    //create a leaflet geojson layer and add it to the map
    L.geoJson(data, {
        pointToLayer: pointToLayer
    }).addTo(map);
};

function processData(data){
    //empty array to hold attributes
    var attributes = [];

    //properties of the first feature in the dataset
    var properties = data.features[0].properties;

    //push each attribute name into attributes array
    for (var attribute in properties){
        //only take attributes with population values
        if (attribute.indexOf("Pop") > -1){
            attributes.push(attribute);
        };
    };

    //check result
    console.log(attributes);

    return attributes;
};


//Example 3.4 line 1
/*.attr("cy", function(d){
    return y(d.population);
})
.style("fill", function(d, i){ //add a fill based on the color scale generator
    return color(d.population);
})
.style("stroke", "#000"); */ //black circle stroke

//Example 3.6 line 1...create y axis generator
var yAxis = d3.axisLeft(y);

//Example 3.7 line 6...create axis g element and add axis
var axis = container.append("g")
    .attr("class", "axis");

yAxis(axis);

//Example 3.8 line 1...create axis g element and add axis
var axis = container.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(50, 0)")
    .call(yAxis);

//below Example 3.9...create a text element and add the title
var title = container.append("text")
    .attr("class", "title")
    .attr("text-anchor", "middle")
    .attr("x", 450)
    .attr("y", 30)
    .text("City Populations");

//Example 3.14 line 1...create circle labels
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

//Example 3.15 line 24...second line of label
var popLine = labels.append("tspan")
    .attr("class", "popLine")
    .attr("x", function(d,i){
        return x(i) + Math.sqrt(d.population * 0.01 / Math.PI) + 5;
    })
    .attr("dy", "15") //vertical offset
    .text(function(d){
        return "Pop. " + d.population;
    });    

//create format generator
var format = d3.format(",");

//Example 3.16 line 1...second line of label
var popLine = labels.append("tspan")
    .attr("class", "popLine")
    .attr("x", function(d,i){
        return x(i) + Math.sqrt(d.population * 0.01 / Math.PI) + 5;
    })
    .attr("dy", "15") //vertical offset
    .text(function(d){
        return "Pop. " + format(d.population); //use format generator to format numbers
    });

//first line of label
var nameLine = labels.append("tspan")
    .attr("class", "nameLine")
    .attr("x", function(d,i){
        //horizontal position to the right of each circle
        return x(i) + Math.sqrt(d.population * 0.01 / Math.PI) + 5;
    })
    .text(function(d){
        return d.city;
    });

//second line of label
var popLine = labels.append("tspan")
    .attr("class", "popLine")
    .attr("x", function(d,i){
        //horizontal position to the right of each circle
        return x(i) + Math.sqrt(d.population * 0.01 / Math.PI) + 5;
    })
    .text(function(d){
        return "Pop. " + d.population;
    });

/*.axis path,
.axis line {
    fill: none;
    stroke: black;
    stroke-width: 1px;
    shape-rendering: crispEdges;
}

.axis text {
    font-family: sans-serif;
    font-size: 0.9em;
}*/

//create axis g element and add axis
var axis = container.append("g")
    .attr("class", "axis")
    .call(yAxis);

//Step 1: Create new sequence controls
function createSequenceControls(){
    //create range input element (slider)
    var slider = "<input class='range-slider' type='range'></input>";
    document.querySelector("#panel").insertAdjacentHTML('beforeend',slider);

    //set slider attributes
    document.querySelector(".range-slider").max = 1;
    document.querySelector(".range-slider").min = 0;
    document.querySelector(".range-slider").value = 0;
    document.querySelector(".range-slider").step = 1;

    //add step buttons
    document.querySelector('#panel').insertAdjacentHTML('beforeend','<button class="step" id="reverse">Reverse</button>');
    document.querySelector('#panel').insertAdjacentHTML('beforeend','<button class="step" id="forward">Forward</button>');

    //replace button content with images
    document.querySelector('#reverse').insertAdjacentHTML('beforeend',"<img src='img/reverse.png'>")
    document.querySelector('#forward').insertAdjacentHTML('beforeend',"<img src='img/forward.png'>")
};

document.addEventListener('DOMContentLoaded',createMap)