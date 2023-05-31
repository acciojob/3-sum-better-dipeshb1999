function findClosestSum() {
  const inputArray = document.getElementById("inputArray").value;
  const target = document.getElementById("target").value;
  const nums = inputArray.split(" ").map(Number);

  const closestSum = threeSum(nums, target);
  document.getElementById("result").textContent =
    "Closest sum: " + closestSum;
}

function threeSum(nums, target) {
  nums.sort((a, b) => a - b);

  let closestSum = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }

      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        return closestSum;
      }
    }
  }

  return closestSum;
}
