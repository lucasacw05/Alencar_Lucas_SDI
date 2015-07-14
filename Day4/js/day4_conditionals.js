
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

 var kidHeight = 42;
 var sneakerLift = 2;

 //if the child is 48 inches or taller they can ride the ride

 if(kidHeight>=48){
  //Code inside of here will run if child is 48 inches or taller
  console.log("Congrats, you are tall enough to ride the coaster");
 } else {
  console.log("Sorry, you are too short to ride the roller coaster!");
 }



 console.log("This text is after the code block.");