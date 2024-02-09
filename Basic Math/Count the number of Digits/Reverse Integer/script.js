function reverseNumber(n){
  var revNum=0;
  while(n>0){
    var lastDigit=n%10;
    revNum=(revNum*10)+lastDigit
    n=Math.floor(n/10)
  }
  return revNum
}

var n=12345
console.log("Reverse Number =  "+reverseNumber(n))
