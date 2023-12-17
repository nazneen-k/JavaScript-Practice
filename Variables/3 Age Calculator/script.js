//3. Age Calculator:
//Write a program that calculates someone's age when given their birth year. Prompt the user to enter their birth year.
var birthYear=prompt("Enter Your Date of birth year: ")
var currentYear=new Date().getFullYear()
var age= currentYear-birthYear;
console.log(age)