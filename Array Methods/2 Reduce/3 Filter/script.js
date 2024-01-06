var arr=[1,2,3,4,5,6,7,8,9,10]
var even=arr.filter(num=>num%2==0)
console.log(even)


//Write a function called filterEvenNumbers that takes an array of numbers as input and returns a new array containing only the even numbers.

function filterEvenNumbers(array){
   return array.filter(num=>num%2==0)
}
console.log(filterEvenNumbers([1,2,3,4,5,6,7,8,9,10]))