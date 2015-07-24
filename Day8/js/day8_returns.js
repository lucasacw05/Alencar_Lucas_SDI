
 /*
Lucas Alencar
Section 00 
7-23-2015
Returns
 */

//alert("Test It");

 //Create a function area of rectangle
 function calcArea(w, h){
  //Calculate the area
  var area = w*h;

  //Console.log the results
  console.log("The area is "+area);

  //In order to use results in main code use return and then "whatever you want to return";
  return area;

 }

 //Call the function
 //Catch the returned value in a variable
 var results = calcArea(10, 30);

 //Access the area in main code
 console.log(results);


 //Calculate w 40 h 60
 var results2 = calcArea(40, 60);
 console.log(results2);

 //What is the total area of both rectangle
 var total = results + results2;
 console.log("The combined area of both is "+total);