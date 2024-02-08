function countDigits(n) {
  var count = 0;
  while (n > 0) {
    var lastDigit = n % 10;
    count = count + 1;
    n = Math.floor(n / 10);
  }
  return count;
}

var n = 12345;
console.log("Number of digits in", n, "is:", countDigits(n));
