function sortedSquaredArray(array) {

  let squaredArray = array.map(elem => 0);
  let start = 0;
  let end = array.length -1;
  
  for (let i = array.length - 1; i >= 0; i--) {
    if (Math.abs(array[start]) > Math.abs(array[end])) {
      squaredArray[i] = array[start] * array[start];
      start++;
    } else {
      squaredArray[i] = array[end] * array[end];
      end--;
    }
  }
  return squaredArray;
}

// O(n) time complexity && O(n) space complexity
