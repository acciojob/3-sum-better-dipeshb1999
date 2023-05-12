//function threeSum(arr, target) {
// write your code here
  
//}

//module.exports = threeSum;
function threeSum(nums, target) {
  nums.sort((a, b) => a - b); // Sort the array in ascending order
  let closestSum = nums[0] + nums[1] + nums[2]; // Initialize closestSum with the sum of the first three numbers
  const len = nums.length;

  for (let i = 0; i < len - 2; i++) {
    let left = i + 1; // Pointer for the element next to nums[i]
    let right = len - 1; // Pointer for the last element

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === target) {
        return sum; // Found an exact match, return the sum
      }

      // Update closestSum if the current sum is closer to the target
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }

      // Adjust the pointers based on the current sum
      if (sum < target) {
        left++; // Move the left pointer to increase the sum
      } else {
        right--; // Move the right pointer to decrease the sum
      }
    }
  }

  return closestSum;
}