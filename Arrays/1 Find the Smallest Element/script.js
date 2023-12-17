let arr=[23,445,2,4,5,2,45]
let min=arr[0]
for(let i=0;i<arr.length;i++){
    if(arr[i]<min){
        min=arr[i]
    }
}
console.log("The smallest element is "+min)


let array=[234,2345,345,56234,6]
let minimum=Math.min(...array)
console.log("The smallest element from Array is "+minimum)