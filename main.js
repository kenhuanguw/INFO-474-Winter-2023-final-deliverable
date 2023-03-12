// modify JSON format
var weatherData = Object.entries(data.reduce((acc, {
  date, actual_mean_temp, actual_min_temp, actual_max_temp, actual_precipitation, location}) => {
  acc[location] = (acc[location] || []);
  acc[location].push({date, actual_mean_temp, actual_min_temp, actual_max_temp, actual_precipitation});
  return acc;
  }, {})).map(([key, value]) => ({ location: key, data: value }));

// data formatting
var parseDate = d3.timeParse("%Y-%m-%d");
var maxTemp = 116;
var minTemp = -7;

weatherData.forEach(function(location){
  location.data.forEach(function(d) {
    d.date = parseDate(d.date);
    d.actual_max_temp = +d.actual_max_temp;
    d.actual_min_temp = +d.actual_min_temp;
    d.actual_precipitation = +d.actual_precipitation;
  });
});
var place = 0;

// area space
var margin = {top: 0, right: 80, bottom: 50, left: 30}
var width = 700;
var height = 800;

// svg container
var svg = d3.select("#weatherChart")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + (width / 2) + "," + (margin.top + height / 2) + ")");

// outer and inner radius of chart
var	outerRadius = Math.min(width - margin.right - 40, height) / 2;
var innerRadius = outerRadius * 0.4;

// temperature color scale
var colorScale = d3.scaleLinear()
  .domain([minTemp,(minTemp + maxTemp) / 2, maxTemp])
  .range(["#2A00D5", "#A1015D", "#FE0002"])
  .interpolate(d3.interpolateHcl);

// temperature bar scale
var barScale = d3.scaleLinear()
  .range([innerRadius, outerRadius])
  .domain([minTemp, maxTemp]);

// precipitation circle scale
var precipitationScale = d3.scaleLinear()
  .range([0, outerRadius / 3]);

// date rotation
var angle = d3.scaleLinear()
  .range([-180, 180])
  .domain(d3.extent(weatherData[place].data, function(d){
    return d.date;
  }));

// bars wrapper
var barWrapper = svg.append("g")
  .attr("transform", "translate(" + 0 + "," + 0 + ")");

// axis gridlines
var gridlinesRange = [];
for (var i = 0; i < 6; i++){
  gridlinesRange.push(i * (maxTemp - minTemp) / (6 - 1) + minTemp);
}

var axes = barWrapper.selectAll(".gridCircles")
  .data(gridlinesRange)
  .enter()
  .append("g");

// axis circles
axes.append("circle")
  .attr("class", "axisCircles")
  .attr("r", function(d){
    return barScale(d);
  });

// axis text
axes.append("text")
  .attr("class", "axisText")
  .attr("y", function(d){
    return barScale(d);
  })
  .attr("dy", "0.3em")
  .text(function(d) {
    return d + "°F";
  });

// month labels
var arc = d3.arc()
  .innerRadius(outerRadius + 10)
  .outerRadius(outerRadius + 30);

var pie = d3.pie()
  .value(function(d){
    return d.endDateID - d.startDateID; })
  .padAngle(0.01)
  .sort(null);

svg.selectAll(".monthArc")
  .data(pie(monthData))
  .enter()
  .append("path")
  .attr("class", "monthArc")
  .attr("id", function(d, i){
    return "monthArc_" + i;
  })
  .attr("d", arc);

svg.selectAll(".monthText")
  .data(monthData)
  .enter()
  .append("text")
  .attr("class", "monthText")
  .attr("x", 60)
  .attr("dy", 13)
  .append("textPath")
  .attr("xlink:href", function(d, i){
    return "#monthArc_" + i;
  })
  .text(function(d){
    return d.month;
  });

barWrapper.append("line")
  .attr("class", "yearLine")
  .attr("x1", 0)
  .attr("y1", -innerRadius * 0.65)
  .attr("x2", 0)
  .attr("y2", -outerRadius * 1.1);

// title
var textWrapper = svg.append("g")
  .attr("class", "textWrapper")
  .attr("transform", "translate(" + (-outerRadius - 50) + "," + 0 + ")");

textWrapper.append("text")
  .attr("class", "subtitle")
  .attr("x", 0)
  .attr("y", -outerRadius - 20)
  .text(weatherData[place].location);

// legend
var tempScale = d3.scaleLinear()
  .domain([minTemp, maxTemp])
  .range([0, width]);

tempRange = tempScale.domain();
tempRange[2] = tempRange[1] - tempRange[0];
tempPoint = [];
for (i = 0; i < 10; i++){
  tempPoint.push(i * tempRange[2] / (10 - 1) + tempRange[0]);
}

svg.append("defs")
  .append("linearGradient")
  .attr("id", "legend-weather")
  .attr("x1", "0%")
  .attr("y1", "100%")
  .attr("x2", "0%")
  .attr("y2", "0%")
  .selectAll("stop")
  .data(d3.range(10))
  .enter()
  .append("stop")
  .attr("offset", function(d, i){
    return tempScale(tempPoint[i]) / width;
  })
  .attr("stop-color", function(d, i){
    return colorScale(tempPoint[i]);
  });

var legendHeight = Math.min(outerRadius * 2, 400);

var legendsvg = svg.append("g")
  .attr("class", "legendWrapper")
  .attr("transform", "translate(" + (outerRadius + margin.right ) + "," + 0 + ")");

legendsvg.append("rect")
  .attr("class", "legendRect")
  .attr("x", 0)
  .attr("y", -legendHeight / 2)
  .attr("ry", 8 / 2)
  .attr("width", 8)
  .attr("height", legendHeight)
  .style("fill", "url(#legend-weather)");

legendsvg.append("text")
  .attr("class", "legendTitle")
  .attr("x", 0)
  .attr("y", legendHeight / 2 + 30)
  .style("text-anchor", "middle")
  .text("Average Daily Temperature");

// x-axis
var yScale = d3.scaleLinear()
  .range([legendHeight / 2, -legendHeight / 2])
  .domain([minTemp , maxTemp]);

var yAxis = d3.axisRight(yScale)
  .ticks(5)
  .tickFormat(function(d){
    return d + "°F";
  });

legendsvg.append("g")
  .attr("class", "axis")
  .attr("transform", "translate(" + (10) + ",0)")
  .call(yAxis);

var toolTip = d3.tip()
.attr('class', 'd3-tip')
.offset([-10, 0])
.html(function(d) {
  return "Date: " + d.date + "<br/>" +
         "Mean Temperature: " + d.actual_mean_temp + "°F" + "<br/>" +
         "Minimum Temperature: " + d.actual_min_temp + "°F" + "<br/>" +
         "Maximum Temperature: " + d.actual_max_temp + "°F" + "<br/>" +
         "Precipitation: " + d.actual_precipitation + " in";
});

svg.call(toolTip);

updateChart();
var selectLocation = document.querySelector("select")
selectLocation.addEventListener("change", function(){
  place = +selectLocation.value;
  updateChart();
  });

function updateChart(){
  precipitationScale.domain(d3.extent(weatherData[place].data, function(d){
    return Math.sqrt(d.actual_precipitation);
  }));

  var updatePrecipitation = barWrapper.selectAll(".precipitationCircle")
    .data(weatherData[place].data, function(d){
      return d;
    });

  updatePrecipitation.exit().remove();

  updatePrecipitation
    .data(weatherData[place].data)
    .enter()
    .append("circle")
    .attr("class", "precipitationCircle")
    .attr("transform", function(d){
      return "rotate(" + (angle(d.date)) + ")";
    })
    .attr("cx", 0)
    .attr("cy", function(d){
      return barScale(d.actual_mean_temp);
    })
    .attr("r", function(d){
      return precipitationScale(Math.sqrt(d.actual_precipitation) / 2);
    });

  var updateTemp = barWrapper.selectAll(".tempBar")
    .data(weatherData[place].data, function(d){
      return d;
    });

  updateTemp.exit().remove();

  updateTemp
    .data(weatherData[place].data)
    .enter()
    .append("rect")
    .attr("class", "tempBar")
    .attr("transform", function(d){
      return "rotate(" + (angle(d.date)) + ")";
    })
    .attr("width", 1.5)
    .attr("height", function(d){
      return barScale(d.actual_max_temp) - barScale(d.actual_min_temp);
    })
    .attr("x", -0.75)
    .attr("y", function(d){
      return barScale(d.actual_min_temp);
    })
    .style("fill", function(d){
      return colorScale(d.actual_mean_temp);
    })
    .on('mouseover', toolTip.show)
    .on('mouseout', toolTip.hide);

  d3.select(".subtitle")
    .text(weatherData[place].location);
}