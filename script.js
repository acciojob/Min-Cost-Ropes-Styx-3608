function mincost(arr) {
  let cost = 0;

  // Convert array to min-heap behavior using sort
  while (arr.length > 1) {
    // Sort to simulate min-heap
    arr.sort((a, b) => a - b);

    // Take two smallest ropes
    let first = arr.shift();
    let second = arr.shift();

    let sum = first + second;
    cost += sum;

    // Push the new rope back
    arr.push(sum);
  }

  return cost;
}

// Example usage:
console.log(mincost([4, 3, 2, 6])); // Output: 29
console.log(mincost([1, 2, 3, 4, 5])); // Output: 33
