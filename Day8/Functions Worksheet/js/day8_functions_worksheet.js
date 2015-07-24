
 /*
Lucas Alencar
Section 00 
7-23-2015
Functions Worksheet Activity
 */

//alert("This is Functions Worksheet");

 //Circumference

 /*Calculate the circumference of a circle.

     Parameter(s) for function:
 Radius of the circle
 Return:
     Circumference of the circle
 Result to print to the console:
     “The circumference of the circle is X”;
*/

 var radiusC = prompt("What is the radius of the circumference?");

 function calcCirc(radiusC){

  var circumference = 2*Math.PI*radiusC;

  return circumference;
 }

// var results1;

var result = calcCirc(radiusC);

 console.log("The circumference of the circle with the radius of "+radiusC+" is "+ result);


 /*
  Stung!

  It takes 8.666666667 bee stings per pound to kill an animal. Calculate how many bee stings are needed to kill an animal in a function

  Given:
  Victim’s weight (in pounds)
  Parameter(s) for function:
  Victim’s weight (in pounds)
  Return:
  Number of Bee stings
  Result to print to the console:
  “It takes X bee stings to kill this animal.

  */


 function killAnimal(){

  var victimsWeight = prompt("What is the Victim's weight");
  var beeStings = 8.666666667;

  var stingsToKill = beeStings*victimsWeight;

  return stingsToKill

 }

 var result2 = killAnimal(victimsWeight);