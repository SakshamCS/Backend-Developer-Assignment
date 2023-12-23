function findCommonElements(arr1, arr2) {
    // Create an empty array to store common elements
    var commonElements = [];
  
    // Loop through the elements of the first array
    for (var i = 0; i < arr1.length; i++) {
      var currentElement = arr1[i];
  
      // Check if the current element is present in the second array
      for (var j = 0; j < arr2.length; j++) {
        if (currentElement === arr2[j]) {
          // If it's present, add it to the common elements array
          commonElements.push(currentElement);
          // Break the inner loop as we found a match
          break;
        }
      }
    }
  
    // Return the array with common elements
    return commonElements;
  }
  
  // Example usage:
  var array1 = [1, 2, 3, 4, 5];
  var array2 = [3, 5, 7, 9];
  var resultArray = findCommonElements(array1, array2);
  console.log(resultArray); // Output: [3, 5]
  