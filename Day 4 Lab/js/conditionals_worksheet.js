
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
 
 var gasEfficiency = 15;
 var gaugeReadingGasTank = 75 / 100;
 var tankCapacity = 20;
 var distanceNextGasStation = 200;
 var distanceNotGettingGas = gasEfficiency * (gaugeReadingGasTank * tankCapacity);
 var gallonsInsideTank = tankCapacity * gaugeReadingGasTank;

     if(distanceNotGettingGas<distanceNextGasStation){
  console.log("You only have "+gallonsInsideTank+" gallons of gas in your tank, better get gas now while you can!");
      }

     else {
  console.log("Yes, you can make it without stopping for gas!");
 }

