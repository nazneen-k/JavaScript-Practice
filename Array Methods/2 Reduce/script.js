/*Find the average using Reduce Method */
var arr=[1,2,3,4,5,6,7,8,9,10]
var avg=arr.reduce((total,current)=>{
  return  total+current
},0)/arr.length
console.log(avg)

/*
const sum = arr.reduce((total, num) => total + num, 0);
arr: This is the array on which the reduce() method is called.
     .reduce(): This is the method being called on the array.
     (total, num) => total + num: This is the callback function passed to reduce().
     (total, num): The two parameters in the callback function represent:
total: The accumulator that accumulates the callback's return values (initially set to the specified initial value, which is 0 in this case).
num: The current element being processed in the array.
=>: Arrow function syntax, which defines the function body.
total + num: The function returns the sum of the total accumulator and the num (current element) in each iteration.
, 0: This is the initial value for the total accumulator. If not provided, the first element of the array is used as the initial value.
Let's go through how this line works:

The reduce() method iterates through each element of the arr array.
It starts with an initial total value of 0 (specified as the second argument to reduce()).
On each iteration:
total represents the running sum (starting from 0).
num represents the current element in the array.
The callback function adds the num value to the total accumulator.
This updated total becomes the new accumulator value for the next iteration.
The reduce() method continues this process until it has processed all elements in the array.
Finally, the sum variable holds the accumulated sum of all elements in the array.
This line of code effectively sums up all the elements in the array by continuously adding each element to the running total (total) using the reduce() method and the provided callback function.
*/
