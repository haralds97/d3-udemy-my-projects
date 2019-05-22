/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.5 - Activity: Adding SVGs to the screen
*/

const svg = d3.select("#chart-area").append("svg")
		.attr("width", 400)
		.attr("height", 300);

const rect = svg.append("rect")
		.attr("x", 150)
		.attr("y", 150)
		.attr("width", 100)
		.attr("height", 120)
		.attr("fill", "orange");

const line = svg.append("line")
		.attr("x1", 5)
		.attr("y1", 6)
		.attr("x2", 123)
		.attr("y2", 145)
		.attr("stroke", "green")
		.attr("stroke-width", 23);

const ellipse = svg.append("ellipse")
		.attr("cx", 300)
		.attr("cy", 266)
		.attr("rx", 13)
		.attr("ry", 24)
		.attr("fill", "blue");