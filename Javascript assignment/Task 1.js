function uniqueArray(arr) {
  // Create an empty array to store unique elements
  var uniqueArr = [];

  // Loop through the input array
  for (var i = 0; i < arr.length; i++) {
    // Check if the current element is not already in the unique array
    if (uniqueArr.indexOf(arr[i]) === -1) {
      // If not present, add it to the unique array
      uniqueArr.push(arr[i]);
    }
  }

  // Return the array with unique elements
  return uniqueArr;
}

// Example usage:
var inputArray = [1, 2, 3, 4, 2, 5, 6, 1];
var resultArray = uniqueArray(inputArray);
console.log(resultArray); // Output: [1, 2, 3, 4, 5, 6]
