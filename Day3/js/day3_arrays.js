/*
Lucas Alencar
Section 00
7-11-15
Arrays
 */

//alert("This is Day 3 Lucas Alencar")


//Create a basic array
//Picking oranges

var orangeBins = [];


do{orangeBins[0]=prompt("What is the value for the first item in the array?");
} while(isNaN(orangeBins[0]) || orangeBins[0] === "");

do{orangeBins[1]=prompt("What is the value for the second item in the array?");
} while(isNaN(orangeBins[1]) || orangeBins[1] === "");

do{orangeBins[2]=prompt("What is the value for the third item in the array?");
} while(isNaN(orangeBins[2]) || orangeBins[2] === "");


//How many oranges did we pick?

var totalOranges = orangeBins[0] + orangeBins[1] + orangeBins[2];

console.log(totalOranges+" oranges were picked in 3 days");


//average number of oranges picked
var averageOranges = totalOranges/orangeBins.length;

//Length property of arrays
console.log(orangeBins.length);
//The length of an arrays is how many itens there is inside it.)


console.log("The average number of oranges picked is "+averageOranges);

//Create an array of Avengers
var avengerNames = ["Iron-man", "Capitain America", "Hawkeye", "Hulk"];

//Print out whole array
console.log(avengerNames);

//Access a specific item in the array
console.log(avengerNames[1]);

//Use a variable as an index number
var num = 2;
console.log(avengerNames[num]);

//Set a specific item
avengerNames[3]="Thor";
console.log(avengerNames);

//Add a new item in our array
avengerNames[4] = "Falcon";

console.log(avengerNames);

//Add a new item ** Very Important.
avengerNames[avengerNames.length] = "Black Widow";
console.log(avengerNames);

//Create a new array for fruits
var fruitArray = ["banana", "pear", "peach", "strawberry"];
console.log(fruitArray);

//push - method or a function of arrays
//Adds it to the end of the array

fruitArray.push("pineapple");
console.log(fruitArray);
console.log(fruitArray[4]);

fruitArray.push("date");
console.log(fruitArray);

//pop method - removes the last item in the array AND returns it
var caught = fruitArray.pop();
console.log(fruitArray);
console.log(caught);

//Splice - used for adding and removing items in an array
//splice(position, # of itens to remove, itens to put in )

fruitArray.splice(0,2,"lemon","cherry");
console.log(fruitArray);