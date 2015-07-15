
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

 */