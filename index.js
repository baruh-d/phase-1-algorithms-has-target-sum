function hasTargetSum(array, target) {
  // Write your algorithm here
  const numbersSeen = {}; // Initialize an empty object to keep track of seen numbers

  for (let num of array) {
    const neededNumber = target - num; // Calculate the needed number to reach the target

    if (numbersSeen[neededNumber]) {
      return true; // Found a pair that adds up to the target
    }

    numbersSeen[num] = true; // Add the current number to numbersSeen
  }

  return false; // No pair of numbers adds up to the target
}  
  // Test cases
  console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // true
  console.log(hasTargetSum([22, 19, 4, 6, 30], 25)); // true
  console.log(hasTargetSum([1, 2, 5], 4)); // false
  


/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  Function hasTargetSum(array, target):
    Initialize an empty object numbersSeen
    For each num in array:
        Calculate neededNumber = target - num
        If numbersSeen[neededNumber] exists:
            Return true
        Add num to numbersSeen with value true
    Return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
