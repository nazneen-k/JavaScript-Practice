/*Find the average using Reduce Method */
var arr=[1,2,3,4,5,6,7,8,9,10]
var avg=arr.reduce((total,current)=>{
  return  total+current
},0)/arr.length
console.log(avg)

