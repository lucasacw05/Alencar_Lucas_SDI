
 /*
Lucas Alencar
Section 00 
Multiple
7-25-2015
 */

//alert("Test It");

 //Create variables for height and width
 var height = 8;
 var width = 6;

 //Create another variable for a base of a triangle
 var base = 5;


 //Function call to area
 var resultsArea = calcArea(height, width);
 console.log(resultsArea);

 //Create a function to calculate the perimeter of a rectangle
 var calcPeri = function(h, w){
  var periTotal = 2*h+2*w;
  return periTotal;
 };

 //Function call must go under the function definition for Anons

 var resultsPeri = calcPeri(height, width);
 console.log(resultsPeri);

 //Create a function to calculate the area of rectangle
 function calcArea(h, w){
  var area = h*w;
  return area;
 }

 //Ask the user if they would like to calculate the area of a triangle.
 var userPrompt=prompt("Would you like to calculate the area of a triangle?\nPlease answer yes or no");
 //validate

 while(userPrompt.toLowerCase() !="yes" && userPrompt.toLowerCase() !="no"){
  userPrompt=prompt("Please only answer yes or no. Would you like to calculate the area of a triangle?");
 }

 //Conditional to see if we should run the anon function.
 if(userPrompt.toLowerCase()==="yes"){

  //Create a function to calculate the area of triangle
  var  triArea = function(b, h){
   var area = .5*b*h;
   return area;
  };


 }

 if (userPrompt.toLowerCase()==="yes"){
  //Function call to triangle area
  var triAreaTotal = triArea(base, height);
  console.log(triAreaTotal);
 }






 //Create a procedure that will console.log the rectangle perimeter and area
 function printOut(p, a){
  console.log("The perimeter is "+p);
  console.log("The area of the rectangle is "+a);
 }

 //Function call for out print outs
 printOut(resultsPeri, resultsArea);