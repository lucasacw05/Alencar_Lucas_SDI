/*
Lucas Alencar
Section 00
7-11-2015
Prompts
 */

//alert("Test It")

//Ask the user for their input
var userInput = prompt("Enter your year of birth");
if(isNaN(userInput) || userInput === ""){
    var userInput = prompt("Enter your year of birth again");
} else{
    alert("Great!");
}

console.log(userInput);

var bigQuestion;
bigQuestion=prompt("Did you already had birthday this year?");
if(bigQuestion.toLowerCase()==="yes"){
    var age = (2015-userInput);
    console.log("You are "+age+" years old.");
    alert("You are "+age+" years old.");
} else
var age = (2015-userInput)-1;
console.log("You are "+age+" years old.");
alert("You are "+age+"years old.");

//Calculate the area of a rectangle

//Prompt the user for width
var width = prompt("Let's calculate the area of a rectangle.\nPlease enter a width:");

//Prompt the user for a height
var height = prompt("Please enter a height");

//Calculate the area using the user input
var area = width * height;
console.log("The area of your rectangle is "+area);

//Create variable that holds the whole result

var result = "The area of your rectangle is "+area;
console.log(result);
alert(result);