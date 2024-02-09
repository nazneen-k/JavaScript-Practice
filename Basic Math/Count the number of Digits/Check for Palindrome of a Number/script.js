function palindrome(n) {
    var revNum = 0;
    var duplicate = n;
    while (n > 0) {
        var lastDigit = n % 10;
        revNum = (revNum * 10) + lastDigit;
        n = Math.floor(n / 10);
    }
    if (duplicate === revNum) {
        return true;
    } else {
        return false;
    }
}

var n = 12328;
if (palindrome(n)) {
    console.log("It is a Palindrome");
} else {
    console.log("It is not a palindrome");
}
