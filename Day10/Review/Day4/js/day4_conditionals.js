
 /*
Lucas Alencar
Section 00 
7-14-15
Conditionals
 */

//alert("Test It");

//Basic conditional If statement
// if(condition to test){ Code to run if true. }

 //Create a Boolean variable
 var oldEnought = true;

 //If the child is old enough, tell him he can ride the coaster.
 // else{} - this will run if the IF statement does not run!
 //"Catch all"

 if(oldEnought){
  //Code inside of the {} will run if oldEnough is a Boolean of true.
  console.log("You can ride the coaster!");
 } else{
  // This code will run IF the if block does not run!
  // if oldEnough evaluates to a boolean of false
  console.log("Sorry, you are too young to ride.");
 }

 //Relational Expressions - Operators

 //Test the kids height to see if they can ride the ride

 var kidHeight = prompt("How tall are you in meters?");
 var sneakerLift = 2;
 var minHeight = 48;

 //if the child is 48 inches or taller they can ride the ride

 if(kidHeight>=48){
  //Code inside of here will run if child is 48 inches or taller
  console.log("Congrats, you are tall enough to ride the coaster");
 } else if(Number(kidHeight)+sneakerLift >=minHeight){
  //This code will run if the child is tall enough while wearing sneakers
  console.log("You are tall enough to ride the coaster if you wear your sneakers");

 } else {
  console.log("Sorry, you are too short to ride the roller coaster!");
 }



 console.log("This text is after the code block.");