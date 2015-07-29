
 /*
Lucas Alencar
Section 00 
7-23-2015
Functions
 */

 calcArea();

//alert("Test It");
 //basic function structure
 // function functionName(){Code to run goes here}

 printHello();

 //Create a function that will console.log something

 function printHello(){
  //This code will run when the function runs
  console.log("This function is working!");

 }

 //Create a function call that will start our printHello() function
//Go button to the factory
 printHello();
printMore();
 printHello();

 //Create a function that console logs a different string

 function printMore(){
  console.log("This is different text");
 }

 //function call printMore
 printMore();

 //Create a function that calculates the area of a rectangle
 function calcArea(){
  //Create variables for width, heigth and area.
  var width;
  do{
   width=prompt("Choose a width to calculate the area of the rectangle");
  }while(isNaN(width) || width === "");
  var height;
  do{
   height=prompt("Choose a width to calculate the area of the rectangle");
  }while(isNaN(height) || height === "");

  var area = width*height;

  //console log the answer
  console.log("The area of the rectangle is "+area);
 }

 calcArea();