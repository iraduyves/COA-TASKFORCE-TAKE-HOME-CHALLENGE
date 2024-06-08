function findContinuousSubarray(arr, target) {
    let sum = 0;
    let start = 0;

    for (let end = 0; end < arr.length; end++) {
        sum += arr[end];

        while (sum > target) {
            sum -= arr[start];
            start++;
        }

        if (sum === target) {
            return true;
        }
    }

    return false;
}

// Test cases
console.log(findContinuousSubarray([4, 2, 7, 1, 9, 5], 14)); // true
console.log(findContinuousSubarray([1, 2, 3], 6)); // true
console.log(findContinuousSubarray([1, 2, 3, 4, 5], 9)); // true
console.log(findContinuousSubarray([-1, 2, 3, -2, 4], 5)); // true
console.log(findContinuousSubarray([1, 2, 3, 4, 5], 20)); // false
console.log(findContinuousSubarray([], 5)); // false