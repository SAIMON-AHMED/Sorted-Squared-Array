# Sorted-Squared-Array

Description:
This function sortedSquaredArray takes in a non-empty array of integers sorted in non-decreasing order and returns a new array where each element is the square of the values from the original array, also sorted in non-decreasing order. The function achieves this in O(n) time complexity, where n is the number of elements in the input array.

How It Works:
The function leverages two pointers: start (beginning of the array) and end (end of the array).
Since the array is already sorted, the largest square value can either be at the beginning (for negative numbers) or at the end (for positive numbers).
The algorithm iterates backward through the new array and fills it with the largest square of the two values (either array[start] or array[end]), then adjusts the respective pointer.
The result is an array of squared values, also sorted in non-decreasing order.

Complexity:
O(n): The function iterates over the array once, comparing and squaring the values.
O(n) space complexity: The result is stored in a new array of the same length as the input.

Usage Example:
 
  const array = [-7, -3, 1, 9, 10];
  const result = sortedSquaredArray(array);
  console.log(result); // Output: [1, 9, 49, 81, 100]

Parameters:
array (Array of Integers): A sorted array of integers in non-decreasing order.

Returns:
Returns a new array of integers where each element is the square of the corresponding element in the input array, also sorted in non-decreasing order.
