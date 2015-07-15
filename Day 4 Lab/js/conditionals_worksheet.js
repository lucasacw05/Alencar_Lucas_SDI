
 /*
Lucas Alencar
Section 00 
7-14-15
Conditionals Worksheet
 */

//alert("This is Conditionals Worksheet.");

 /*
  Last Chance for Gas!

  A driver has to determine if they can make it across the desert with their current fuel.
  They are about to past the last gas station for the next 200 miles and they need to determine
  whether they should stop now for gas or not.

  Given:
  Gas efficiency of the car (in mpg)
  Gauge reading of the gas tank (in %)
  Car’s gas tank capacity (in gallons)
  Result To Print Out:
  “Yes, you can make it without stopping for gas!” or “You only have X gallons of gas in your tank, better get gas now while you can!”
*/

//This is the gas efficiency of miles the car is able to do per gallon of gas
 var gasEfficiency = 15;

 //This is the gauge reading of the gas tank in % at the moment the problem appears.
 var gaugeReadingGasTank = 75 / 100;

 //This is the tank capacity of the car in gallons.
 var tankCapacity = 20;

 //This is the distance in miles to the next station.
 var distanceNextGasStation = 200;

 //This is the distance the car will be able to do without getting more gas.
 var distanceNotGettingGas = gasEfficiency * (gaugeReadingGasTank * tankCapacity);

 //This is the quantity of gallons of gas that the car has at the beginning of the problem.
 var gallonsInsideTank = tankCapacity * gaugeReadingGasTank;

     if(distanceNotGettingGas<distanceNextGasStation){
  console.log("You only have "+gallonsInsideTank+" gallons of gas in your tank, better get gas now while you can!");
      }

     else {
  console.log("Yes, you can make it without stopping for gas!");
 }




/*
 Check the Login

 Make sure the user has the correct username and password.
 If the username doesn’t match then a specific message for
 that should be printed to the console. If the password doesn’t
 match a message should appear for that, etc. Only one error
 message should appear.

 Given:
 Username entered by user
 Password entered by user
 Correct username
 Correct password
 Result To Print Out:
 “Welcome, (place their username here)!” - if the username and password is correct
 “User not found. Try again.” -if the username does not match
 “Password does not match our records.” -if the username matches but the password does not
 */


 //This is the username
 var userName = "lovesdi";

 //This is the password
 var password = "lovesomuch";

 //This is the first question. It asks about the username of the person.
 var question1;

  question1 = prompt("Welcome, place your username here!");
  console.log("Welcome, place your username here!");

 //This is the second question. It asks about the password of the person.
 var question2;

/*This is the application of the conditionals IF and ELSE to correctly answer the person when he or she puts the wrong or
  right username and the wrong or right password.
 */

 if (question1 === userName){
  console.log("Now, type your password");
  question2 = prompt("Now, type your password");
 } else {
  console.log("User not found. Try again.");
  alert("User not found. Try again");
 }

  if(question2 === password){
  console.log("Congratulations, you just logged in!");
  alert("Congratulations, you just logged in!");
 } else {
  console.log("Password does not match out records.");
  alert("Password does not match out records.");
 }


