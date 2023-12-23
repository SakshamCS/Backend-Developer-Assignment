// Car object
var car1 = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
  };
  
  var car2 = {
    color: "Blue",
    transmission: "Automatic"
  };
  
  // Function to merge two car objects
  function mergeCars(carA, carB) {
    // Create a new object to store the merged properties
    var mergedCar = {};
  
    // Copy properties from the first car
    for (var prop in carA) {
      if (carA.hasOwnProperty(prop)) {
        mergedCar[prop] = carA[prop];
      }
    }
  
    // Copy properties from the second car
    for (var prop in carB) {
      if (carB.hasOwnProperty(prop)) {
        mergedCar[prop] = carB[prop];
      }
    }
  
    // Return the merged car object
    return mergedCar;
  }
  
  // Example usage:
  var mergedCarObject = mergeCars(car1, car2);
  console.log(mergedCarObject);
  