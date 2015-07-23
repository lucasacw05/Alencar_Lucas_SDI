
 /*
Lucas Alencar
Section 00 
7-23-2015
Function Scope
 */

//alert("Test It");

 //Variable scope
 //Variables that are inside and outside of a function


 //Create a variable called width in our main code
 //This variable is scoped outside of the function
 //Scoped to the main code
 var width = 5;
 //Console log it
 console.log("Starting width is "+width);

 //Create a variable called changeMe
 //Scoped to the main code
 var changeMe=7;
 console.log("The starting value of changeMe is "+changeMe);



 //Create a function that calculates the perimeter of a rectangle.
 function calcPeri(){

    //Create variables for width and height and perimeter
    //Try not to reuse variable names
    //But this is going to be impossible for larger files

  //This variable is scoped to the function calcPeri
  var width = 10;
  console.log("Width inside of function is "+width);
  var height = 20;
  var perimeter = width*2+height*2;

  //Change tha value of changeMe
  changeMe = 15;
  console.log("Inside of the function changeMe is "+changeMe);

  //Console log the perimeter
  console.log("The perimeter is "+perimeter);

 }

 console.log("Before the function call width is "+width);
console.log("Before the function call changeMe "+changeMe);

 //Function call for calcPeri
 calcPeri();

 console.log("After the function call, width is "+width);
 console.log("After the function call changeMe is "+changeMe);
 //This will not work
 //Main code cannot see inside of a function
 //console.log("The value of height is "+height);
 //console.log("The value of perimeter is "+perimeter);

