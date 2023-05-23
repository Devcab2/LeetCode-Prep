/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 const twoSum = function(nums, target) {
  
  // step  1: create an empty object to store numbers and indices
  const numMap = {};

  // step 2: iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // 2a: calcualagte the coplement
    const complement = target - nums[i];

    // step 3: Check if the complement exists in the map
    if (complement in numMap) {
      // step 3a: Return the indices of the two numbers
      return [numMap[complement], i];
    }

    // step 4: store the current number and index in the map
    numMap[nums[i]] = i;
  }

  // step 5: No solution found, return an empty array
  return [];
};

// given an array of #'s  and a target #.....
// return the indices of the 2 #'s such that they will add up to target.

// each input should have one exact solution, you cannot use the same element twice.
// you can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Test inputs
const nums = [2, 7, 11, 15];
const target = 9;

// Call the function
const result = twoSum(nums, target);

// Log the result
console.log(result);
