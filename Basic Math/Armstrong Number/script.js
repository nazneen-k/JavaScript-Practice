function armStrongNumber(n){
    var sum=0;
    var duplicate=n
    while(n>0){
        var lastDigit=n%10
        sum=sum+(lastDigit*lastDigit*lastDigit)
        n=Math.floor(n/10)
    }
   
    if(sum===duplicate){
        return true
    }
    else{
        return false
    }
}

var n=407;
if(armStrongNumber(n)){
    console.log("It is an Armstrong Number!!")
}else{
    console.log("It is not a Armstrong Number")
}