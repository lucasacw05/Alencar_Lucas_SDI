
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
//This is to ask the user for an input of the radius of the circumference he or she wants to calculate.
 var radiusC = prompt("What is the radius of the circumference?");


 //This is the function to calculate the circumference
 function calcCirc(radiusC){

  //This is the variable to calculate the circumference.
  var circumference = 2*Math.PI*radiusC;

  //This is to return the value of the circumference to outside the function.
  return circumference;
 }


 //This is to return the result outside the function
 var result = calcCirc(radiusC);

 //This is the console update to show what the function calculated.
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

//The variable victimWeight represents the victim's weight. There is also a prompt to the user put it.
 var victimWeight = prompt("What is the Victim's weight");

 //This is the function to calculate how many stings and animal would have to have to die.
 function killAnimal(victimWeight){

  //This is the variable that corresponds to the number of stings per pound to kill an animal.
  var beeStings = 8.666666667;

  //This is the total of bee stings to kill an animal.
  var stingsToKill = beeStings*victimWeight;

  //This is to return the result outside the function
  return stingsToKill

 }
//This is the result stored in the result2 variable.
 var result2 = killAnimal(victimWeight);

 //This is to print the results to the console.
 console.log("It would take "+result2+" bee stings to kill an animal of "+victimWeight+" pounds of weight.");