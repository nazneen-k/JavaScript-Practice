// var input=prompt("Enter a Variable of any type")

// function determineType(input){
//     const typeOfVariable=typeof(input)
//    return typeOfVariable
// }
// const variableType = determineType(input);
// console.log(variableType);

/*

In JavaScript, when you use prompt to accept user input,
the input is always treated as a string, regardless of whether the user enters a number or any other data type. The typeof operator returns "string" for input obtained from the prompt function. */


/*parseFloat(userInput) attempts to convert the user input to a number. If successful, it stores the parsed number in parsedInput.
isNaN(parsedInput) checks if the parsed input is not a number. If it's not a number, it falls into the else block and checks if the input matches a boolean string ("true" or "false"). If it does, it's considered a boolean value.
Otherwise, it's treated as a string. */

var userInput=prompt("Enter a variable of any type")

const parsedInput= parseFloat(userInput)
if (!isNaN(parsedInput)) {
    console.log("Number");
} else if (userInput.toUpperCase() === "TRUE" || userInput.toUpperCase() === "FALSE") {
    console.log("Boolean");
} else {
    console.log("String");
}