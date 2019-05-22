/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/


let svg = d3.select("#chart-area")
			.append("svg")
			.attr("width", 500)
			.attr("height", 500);

d3.json("data/buildings.json")
	.then(buildings => {
		console.log(buildings);

		buildings.forEach(d => {
			d.height = +d.height;
		})
	
	let rectangles = svg.selectAll("rect")
		.data(buildings);

	rectangles.enter()
		.append("rect")
			.attr("x", (d, i) => {
				console.log(d);
				return (i*50) +25;
			})
			.attr("y", 20)
			.attr("width", 25)
			.attr("height", d => {
				console.log(d.height);
				return d.height;
			})
			.attr("fill", "grey");
		
	svg.append("rect")
		.attr("x", 400)
		.attr("y", 250)
		.attr("width", 20)
		.attr("height", 30)
		.attr("fill", "orange");	
	})
	.catch(error => {
		console.log(error);
	})



