/*
This is going to be a multi lined comment
Lucas Alencar
7-9-2015
SDI Section 00
Day 2 Coding Basics
 */

//alert("This is making sure our js file is connected!");

//This is a single lined comment
//Usually will describe what comes right after

/*
Multi-line comment
Anything between the stars and slashes is ignored by the browsers
 */

//alert - gives the user information but returns nothing to us

alert("Welcome to SDI!");

//Console Logging information
console.log("This is the console. Learn to love it!");

//Declare a variable

//Start with the keyword var
var whatever;    //Declaration of a variable

//Define the variable

whatever = 45;
// create a storage container = value ;

//Declare and define a variable
var a =2;

//Send variable value o the console so we can see it
console.log(a);

//Change the value of a variable
a=6;
console.log(a);

//Add 3 to the current value of a
a=a+3;
console.log(a);

//Create another variable

var b;
b=a+3;
console.log(a);
console.log("The value of \"b\" is "+b);

//Simple Math
//Find our age

//Create a variable for year born

var yearBorn = 1996;
var age = 2015-yearBorn-1;
console.log(age);

//Math!
//+,-,*,

//Find the area of a triangle

var width = 8;

var height = 7;

var areaTriangle = width*height/2;
console.log(areaTriangle);

// Modulo - %
// Gives you the remainder

var remainder =31%3;
console.log(remainder);

//Find out if even or odd
//Modulo by 2

var evenOrOdd = 66%2;
console.log(evenOrOdd);

// 0 means even
// 1 means odd

//Assignment Operators
/*
= Assignment Operator - "is"
++ Add 1 to the current value of the variable
-- Subtract 1 to the current value of the variable
+= Addition Assignment Operator - adds the value after it to the current value
-= Subtraction Assignment Operator - subtracts the value after it from the current value
/= Division Operator - divides by the current value
*= Multiplication Assignment - multiplies the following number by the current value;
 */

var tester = 5;
tester++; // tester = tester+1;
tester--; // tester = tester-1;
tester +=3; // tester = tester + 3;
tester -=6; // tester = tester - 6;
tester /=3; // tester = tester/3;
tester *=6; // tester = tester*6;

console.log(tester);

//Orders of Operation
//PEMDAS - Please Excuse My Dear Aunt Sally
// Parenthesis, Exponents, Multiply, Divide, Add, Subtract

//Find Quiz Averages

var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 70;

//Add up all of them and divide by the number of them

var average = (quiz1 + quiz2 + quiz3) /3
console.log(average);

//String - text for coding
// Must have matching " or '
// Needed to separate variable names from standard text

var kermit = "light green";
var frogName = "kermit";

console.log(frogName);

//Double or single quotes
//Escape character \ blackslash
var phrase = 'I don\'t know.\nYou never know!';
console.log(phrase);

// \n New Line Character

//Booleans - true or false
//Light switches of programming
var yes = true;
var nope = "false";
var notCorrect = false;
//A string of "false" is NOT equal to a boolean of false
//When talking about Booleans. It's about "true" or "false"




//Simple math problem
//Find the perimeter of a rectangle
var side1 = 7;
var lengh1 = 6;
var perimeter = side1 *2 + lengh1 *2;
console.log(perimeter);
//Are the parenthesis needed


//Concatenation - Combining Texts

var firstName = "Kermit";
var lastName = "The Frog";
var fullName = firstName + " " + lastName;
console.log(fullName+ " is the color "+kermit)

//Anytime you use + with text - it changes EVERYTHING to text
var d = "6";
var e = "7";
var combine = d+e;
console.log(combine)

//Calculate the area of the rectangle
var width2 = 4;
var height2 = 5;

//width * height = area

var area2 = width2 * height2;

//Result format - outputting to console
console.log("The area of the rectangle is "+area2+" sq ft");
