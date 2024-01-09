var s="Hello World"
function reverseWordsInAString(s){
const words=s.trim().split(/\s+/)
 return words.reverse().join(' ')
}

console.log(reverseWordsInAString(s))
