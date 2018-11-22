// from data.js
var tableData = data;

// YOUR CODE HERE!
var filterbtn = d3.select('#filter-btn');

var tbody = d3.select("tbody");

filterbtn.on("click",function() {
    

	d3.event.preventDefault();   // prevents refresing page
    tbody.html("");    // clear previous result
	
	console.log(tableData);
	var datatime = d3.select('#datetime').property("value");
    var city = d3.select('#city').property("value");
    var state = d3.select('#state').property("value");
    var country = d3.select('#country').property("value");
    var shape = d3.select('#shape').property("value");
   
    if (datetime.value != "" && city && state && country && shape){
    	var filterDate = tableData.filter(sighting =>sighting.datetime === datatime  
    										       && sighting.city === city
    										       && sighting.state === state
    										       && sighting.country === country
 											       && sighting.shape === shape);

    	console.log("Data Filtered =", 'datetime + city + state + country + shape');
    }
    else if (datetime.value != "" && city && state && country){
    	var filterDate = tableData.filter(sighting =>sighting.datetime === datatime  
    										       && sighting.city === city
    										       && sighting.state === state
    										       && sighting.country === country);
    	console.log("Data Filtered =", 'datetime + city + state + country');
    }
    else if (datetime.value != "" && city && state){
    	var filterDate = tableData.filter(sighting =>sighting.datetime === datatime  
    										       && sighting.city === city
    										       && sighting.state === state);
    	console.log("Data Filtered =", 'datetime + city + state');
    }
    else if (datetime.value != "" && city && country){
    	var filterDate = tableData.filter(sighting =>sighting.datetime === datatime  
    										       && sighting.city === city
    										       && sighting.country === country);
    	console.log("Data Filtered =", 'datetime + city + country');
    }
    else if (datetime.value != "" && city && shape){
    	var filterDate = tableData.filter(sighting =>sighting.datetime === datatime  
    										       && sighting.city === city
    										       && sighting.shape === shape);
    	console.log("Data Filtered =", 'datetime + city + shape');
    }
    else if (datetime.value != "" && country && shape){
    	var filterDate = tableData.filter(sighting =>sighting.datetime === datatime  
    										       && sighting.country === country
    										       && sighting.shape === shape);
    	console.log("Data Filtered =", 'datetime + country + shape');
    }
    else if (datetime.value != "" && state && country ){
    	var filterDate = tableData.filter(sighting =>sighting.datetime === datatime  
    										       && sighting.state === state
    										       && sighting.country === country);
    	console.log("Data Filtered =", 'datetime + state + country');
    }
    else if (city && state && country){
    	var filterDate = tableData.filter(sighting =>sighting.city === city
    										       && sighting.state === state
    										       && sighting.country === country);
    	console.log("Data Filtered =", 'city + state + country');
    }
    else if (city && state && shape){
    	var filterDate = tableData.filter(sighting =>sighting.city === city
    										       && sighting.state === state
    										       && sighting.shape === shape);
    	console.log("Data Filtered =", 'city + state + shape');
    }
    else if (state && country && shape){
    	var filterDate = tableData.filter(sighting =>sighting.state === state
    										       && sighting.country === country
    										       && sighting.shape === shape);
    	console.log("Data Filtered =", 'state + country + shape');
    }
    else if (city && country && shape){
    	var filterDate = tableData.filter(sighting =>sighting.city === city
    										       && sighting.country === country
    										       && sighting.shape === shape);
    	console.log("Data Filtered =", 'city + country + shape');
    }
    else if (datetime.value != "" && city){
    	var filterDate = tableData.filter(sighting =>sighting.datetime === datatime  
    										       && sighting.city === city);
    	console.log("Data Filtered =", 'datetime + city');
    }
    else if (datetime.value != "" && state){
    	var filterDate = tableData.filter(sighting =>sighting.datetime === datatime  
    										       && sighting.state === state);
    	console.log("Data Filtered =", 'datetime + state');
    }
    else if (datetime.value != "" && country){
    	var filterDate = tableData.filter(sighting =>sighting.datetime === datatime  
    										       && sighting.country === country);
    	console.log("Data Filtered =", 'datetime + country');
    }
    else if (datetime.value != "" && shape){
    	var filterDate = tableData.filter(sighting =>sighting.datetime === datatime  
    										       && sighting.shape === shape);
    	console.log("Data Filtered =", 'datetime + shape');
    }
    else if (city && state){
    	var filterDate = tableData.filter(sighting =>sighting.city === city  
    										       && sighting.state === state);
    	console.log("Data Filtered =", 'city + state');
    }
    else if (city && country){
    	var filterDate = tableData.filter(sighting =>sighting.city === city  
    										       && sighting.country === country);
    	console.log("Data Filtered =", 'city + country');
    }
    else if (city && shape){
    	var filterDate = tableData.filter(sighting =>sighting.city === city  
    										       && sighting.shape === shape);
    	console.log("Data Filtered =", 'city + shape');
    }
    else if (state && country){
    	var filterDate = tableData.filter(sighting =>sighting.state === state  
    										       && sighting.country === country);
    	console.log("Data Filtered =", 'state + country');
    }
    else if (state && shape){
    	var filterDate = tableData.filter(sighting =>sighting.state === state  
    										       && sighting.shape === shape);
    	console.log("Data Filtered =", 'state + shape');
    }
    else if (country && shape){
    	var filterDate = tableData.filter(sighting =>sighting.country === country  
    										       && sighting.shape === shape);
    	console.log("Data Filtered =", 'country + shape');
    }
    else if (state){
    	var filterDate = tableData.filter(sighting =>sighting.state === state);
    	console.log("Data Filtered =", 'state');
    }
    else if (city){
    	var filterDate = tableData.filter(sighting =>sighting.city === city);
    	console.log("Data Filtered =", 'city');
    }
    else if (country){
    	var filterDate = tableData.filter(sighting =>sighting.country === country);
    	console.log("Data Filtered =", 'country');
    }
    else if (shape){
    	var filterDate = tableData.filter(sighting =>sighting.shape === shape);
    	console.log("data filtered =", 'shape');
    }
    else if (datetime.value != ""){
    	var filterDate = tableData.filter(sighting =>sighting.datetime === datatime); 
    	console.log("Data Filtered =", 'datetime');
    }
    else {
    	console.log("None Filter Condition Fulfilled 10");
    }


    if (filterDate){

    	console.log(filterDate);
		buildTable(filterDate);
  		console.log("Done Rendering Data Per Given Filter");
	}
	else{
		alert("No such data found..please try again");
		console.log("No such data found...please try again");

	}

});

//Build Function
var buildTable = (data) => {

    data.forEach((ufolist) => {
    	var row = tbody.append("tr");
    	Object.entries(ufolist).forEach(([key, value]) => {
    	var cell = tbody.append("td");
    	cell.text(value);
    });
  });

};

 // Inital data rendering
buildTable(tableData);  

