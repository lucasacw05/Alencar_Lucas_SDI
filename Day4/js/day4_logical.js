
 /*
Lucas Alencar
Section 00 
7-14-15
Logic Operators
 */

//alert("Test It");

 //Check the price of an item, Scooter
 var scooterCost = 1000;
 var budget = 800;
 var paycheck = 500;

 // if the price of a scooter is less then our budget than we can buy it.
 // And if our paycheck is over 400.

 if(scooterCost<=budget){
  console.log("We can buy the scooter!");
 } else{
  console.log("The cost is too high for our budget.");
 }

if(paycheck>=400){
 console.log("We can buy the scooter!");
} else{
 console.log("Paycheck is too small to buy the scooter.");
}


 // use the AND logical operator to test both conditions at one time!
 if(scooterCost<=budget && paycheck>=400){
  console.log("Both the scooter is in budget and our paycheck is high enough.");
 } else{
  console.log("Sorry, you cannot buy the scooter.");
 }

 //OR Logical Operator
 //Either one must be true in order to be true.


 //If the scooter is less than or equal to our budget OR if we won the lottery than we can buy the scooter.
 var wonLottery = false;

 if(scooterCost<=budget || wonLottery){
  console.log("You have enough money to buy the scooter or you won the lottery!");
 } else{
  console.log("Sorry, no scooter for you, keep playing the lottery.");
 }