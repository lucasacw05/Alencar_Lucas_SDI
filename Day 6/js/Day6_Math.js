/*
Shaun M. Rogers
Section 00
July 18, 2015
Math Class
 */

//alert("Testing to see if this works");

//round() - normal rounding .5 + goes up .49999 - goes down
//Does not permanently change the variable value

//To change the variable, assign it back to the variable
var num1;
do{
    num1=prompt("Choose a number to be rounded to the closest integer.");
} while(isNaN(num1) || num1 === "");
num1 = Math.round(num1);

console.log(num1);
console.log(Math.round(num1));
console.log(num1);

//floor() - rounds down to the nearest integer
var num2;
do{ num2=prompt("Choose a number to be rounded to the past integer.");
} while(isNaN(num2) || num2 === "");
console.log(num2);
console.log(Math.floor(num2));

//ceil() - rounds up to the nearest integer
var num3;
do{ num3=prompt("Choose a number to be rounded to the next integer.");
} while(isNaN(num3) || num3 === "");
console.log(num3);
console.log(Math.ceil(num3));


//random() - return a number between 0 and almost 1
var num4 = Math.random();
console.log(num4);

//Number between 0 and 10
var num5 = Math.random()*10;
console.log (num5);

//Number between two other numbers NOT zero
//Math.random()*(max-min) + min

//Number between 50-80
var num6 = Math.random()*(80-50) + 50;
console.log (num6);

//An INTEGER between 100-1000
var num7 = Math.round(Math.random()*(1000-100) + 100);
console.log(num7);

//.toFixed(x) - Rounds to a decimal place - x decimal
var num8 = Math.random();
console.log (num8);
console.log (num8.toFixed(2));

//Math Constants
//Pi - 3.14159
//Math.PI
console.log(Math.PI.toFixed(5));

//Circumference of a circle
//2*r*pi
var radius = 7;
var circleCumfer = 2 * radius * Math.PI;
console.log (circleCumfer);


