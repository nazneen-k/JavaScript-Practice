let str="This is a string"

let stringtoArray=str.split(" ")
 console.log(stringtoArray)

 let sorting= stringtoArray.sort((a,b)=>{
    return a.length-b.length
 }
 )
 console.log(sorting)

 let ascendingString=sorting.join(" ")
 console.log(ascendingString)