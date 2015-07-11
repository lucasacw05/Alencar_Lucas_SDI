/*
Lucas Alencar
Section 00
7-11-15
Arrays
 */

//alert("This is Day 3 Lucas Alencar")


//Create a basic array
//Picking oranges

var orangeBins = [30,500,10002];

//How many oranges did we pick?

var totalOranges = orangeBins[0] + orangeBins[1] + orangeBins[2];

console.log(totalOranges+" oranges were picked in 3 days");


//average number of oranges picked
var averageOranges = totalOranges/orangeBins.length;

//Length property of arrays
console.log(orangeBins.length);
//The length of an arrays is how many itens there is inside it.)


console.log("The average number of oranges picked is "+averageOranges);
