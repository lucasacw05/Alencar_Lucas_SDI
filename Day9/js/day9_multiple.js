
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


 //Create a function to calculate the area of triangle
 var  triArea = function(b, h){
  var area = .5*b*h;
  return area;
 };


 //Function call to triangle area
 var triAreaTotal = triArea(base, height);
 console.log(triAreaTotal);

 //Create a procedure that will console.log the rectangle perimeter and area
 function printOut(p, a){
  console.log("The perimeter is "+p);
  console.log("The area of the rectangle is "+a);
 }

 //Function call for out print outs
 printOut(resultsPeri, resultsArea);