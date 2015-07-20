/*
Shaun M. Rogers
Section 00
July 18, 2015
While Loops
 */

//alert("Testing to see if this works");

//Initialize a counter variable
var counter = 0;

//while loop with condition
//run as long as the condition is true
while(counter < 200){
 console.log("The current value is "+counter);
 //Change the value of the counter variable
 counter += 5;
 //MUST change the value or you will loop forever

}

//Do while loop
//This loop will always run at least one time before checking the condition

//Create counting variable
var i = 20;

do{
 //This code will always run at least once
 console.log("The value of is is "+i);
 //Increment of change
 i++;

}while(i < 10);

console.log(i)