// Select Location
var tbody = d3.select("tbody");

// Print Statement 
console.log(data);

// Loop and append rows to columns 
data.forEach(ufo => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  // from data.js
var Aliens = data;

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // Print statement
    console.log(inputValue);
    console.log(Aliens);

    var filteredData = Aliens.filter(Aliens => Aliens.datetime === inputValue);

    console.log(filteredData);
});