// 1.Variable Swap:
//Write a program that swaps the values of two variables without using a temporary variable.

/*To swap values without using a temporary Variables is by using the concept of destructuring assignment. */
var a = 10;
var b = 20;
[a, b] = [b, a];
console.log("After Swapping");
console.log("a= ", a);
console.log("b=", b);