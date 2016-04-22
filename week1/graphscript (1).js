/** Data Processing Javascript
 * 
 * Tom Schoufour (10346562)
 * 
 * Making a canvas graph in javascript
 **/


// get data as seperate lines
var datastring = document.getElementById("rawdata");
var linearray = datastring.value.split("\n");
var datearray =  [];
var temparray = [];
console.log(linearray.length);

// make array of months and JSON dictionary for data
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var data = {values:[
   {},
]};

// make seperate arrays with values and fill dictionary with data
for (var i = 0; i < linearray.length; i++)
{
  var date_temp = linearray[i].split(",");
  datearray.push(Date(date_temp[0]));
  temparray.push(date_temp[1]);
  data.values.push({
      X: datearray[i],
      Y: temparray[i]
  });
}

// define padding for graph

var xPadding = 60;
var yPadding = 40;

// define range of values 
function valueRange() 
{
    var valuerange = 278;
    return valuerange + 100;
}

// get X location on graph
function getXPixel(val) 
{
    return ((graph.width - xPadding) / data.values.length) * val + xPadding;
}

// get Y location on graph 
function getYPixel(val) 
{
    return graph.height - (((graph.height - yPadding) / valueRange()) * val + yPadding);
}
// draw graph and axes based on X and Y location of data
$(document).ready(function() 
{
    var graph = $('#graph');
    var ctx = graph[0].getContext('2d');
    
    // axis labels
    ctx.font="18px Arial";
    ctx.fillText("Average temperatures in 2015", getXPixel((data.values.length)/2), 50);
    ctx.font="15px Arial";
    ctx.fillText("Months", getXPixel((data.values.length)/2), graph.height() - 10);
    ctx.fillText("°C", 0, 150);
    
    // parameters for drawing lines
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'Black';
    ctx.font = 'italic 7pt sans-serif';
    ctx.textAlign = "center";
    
    // make x and y axis
    ctx.beginPath();
    ctx.moveTo(xPadding, 0);
    ctx.lineTo(xPadding, graph.height() - yPadding);
    ctx.lineTo(graph.width(), graph.height() - yPadding);
    ctx.stroke();
    
    // make x axis labels the months of the year
    for(var i = 0; i < months.length; i++)
    {
        ctx.fillText(months[i], getXPixel(i*30.5) + xPadding - 35 , graph.height() - yPadding + 10);
    }
    
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
 
    for(var j = 0; j < valueRange(); j += 25)
    {
        ctx.fillText((j - 50)/10, xPadding - 10, getYPixel(j));
    }
    
    ctx.beginPath();
    ctx.moveTo(getXPixel(0), getYPixel(data.values[0].Y));
 
    for(var k = 1; k < data.values.length; k ++)
    {
        ctx.lineTo(getXPixel(k), getYPixel(data.values[k].Y) - 50);
    }
    ctx.stroke();

});

/*
// transform data points according to range of graph  
function createTransform(domain, range){

  // calculate alpha and beta 
 	var alpha = (range[1] - range[0])/(domain[1] - domain[0]);
	var beta = range[1] - alpha * domain[1];
	
	// return function based on alpha and beta
	return function(x){
		return alpha * x + beta;
	};
}

// test transformation
var transform = createTransform([10, 20], [10, 20]);
 	console.log(transform(15));*/