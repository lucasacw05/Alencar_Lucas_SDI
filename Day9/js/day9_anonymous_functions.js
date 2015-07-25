
 /*
Lucas Alencar
Section 00 
7-25-2015
Anonymous Functions
 */

//alert("Test It");

 //Basic Anonymous function.
 //var functionName = function(){}

 //Extremely popular in JS and Jquery
 //Important in Object Oriented Programming
 //For now, it is a matter of style choice between a non and regular functions.

 //Create an anon function to calculate the area of a triangle

 //Test function call
 //var results2 = triArea(5, 10);
 //WILL NOT WORK

 var triArea = function(b, h){
  var area = .5*b*h;
  return area;
 };

 //Function call for a non function
 //MUST BE AFTER THE DEFINITION
 var results = triArea(10,20);
 console.log(results);
