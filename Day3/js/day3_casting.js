
 /*
Lucas Alencar
Section 00 
7-11-15
Casting Variable
 */

//alert("Test It");
//Casting variables means treating on variable like another

var stringVar = "6";
var results = 7 + stringVar;
console.log(results);

//Number() -  Treats what is inside of () like a number, if possible!
 var castongResults = 7 + Number(stringVar);
 console.log(castongResults);

 //Cast Numbers as Strings
//String()
 var areaCode = 407;
 var prefix = 555;
 var lineNumber = 1234;

 var phoneNumber = String(areaCode)+String(prefix)+String(lineNumber);
 var phoneNumber2
 console.log(phoneNumber);

 //ALL PROMPTS() RETURNS TEXT STRINGS!!!
 var videoGamesCurrent = prompt("How many video games do you currently own?");

 var gamesBought = prompt("How many games did you buy today?");

 var totalGames = Number(videoGamesCurrent) + Number(gamesBought);

 console.log(totalGames);

 //Parsing Integers
 // looks through text string and returns the first integer
 //The first character in the text string MUST be the number
 //Spaces aren't counted
 //If it can not convert it, it returns NaN - Not a number

//INT does not allows for decimal places
 var a = parseInt("40 years old");
 console.log(a);

 var b = parseInt("He is 40 years old.");
 console.log(b);
 //It won't find "b" because it doesn't starts with a number

 var c = Number("40 years old");
 console.log(c);

 //parseFloat allows for decimal places. INT does not!
 var d = parseFloat("40.67 years old");
 console.log(d);