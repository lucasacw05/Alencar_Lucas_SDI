
 /*
Lucas Alencar
Section 00 
7-25-2015
Randon Generator
 */

alert("Test It");

 //Create a function that will take in a user prompted max and min value and return a random number between them.

 //Create a variable for the min value

 var min = prompt("We are going to find a random number between two values.\nWhat is the minimum value?");
 //Validate that prompt.
 while(isNaN(min) || min===""){
  if(isNaN(min)){
   min=prompt("Please, only type in numbers and what is the minimum value?");
  } else {
   min=prompt("Please, do not leave blank.\nWhat is the min value?");
  }

 }

 //Number cast or parseInt

 min=Number(min);

 //Variable for max

 var max=prompt("What is the max value?");

 //Validate the prompt


 max = prompt("We are going to find a random number between two values.\nWhat is the minimum value?");
 //Validate that prompt.
 while((isNaN(max) || max==="") ||max<=min){

  if(isNaN(max)){
   max=prompt("Please, only type in numbers and what is the minimum value?");
  } else if(max<=min && max!=""){
   max=prompt("Please make sure the max value is greater than the min value of "+min+"\nWhat is the max value?");
  }
  else{
   max=prompt("Please, do not leave blank.\nWhat is the min value?");
  }

 }


//Number cast max
 max = Number(max);