
 /*
Lucas Alencar
Section 00 
7-21-2015
Looping over Arrays
 */

//alert("Test It");

 //Create an Array of Scooby Doo Characters

 var scoobyGang = ["Scooby", "Shaggy", "Velma", "Daphne"];

 //Push an array
 scoobyGang.push("Fred");

 scoobyGang.push("Scooby Dum");
 scoobyGang.push("Scrappy");


 //Cycle through this array and tell each one of them that they solved a case.
 console.log(scoobyGang.length);

 for(var i = 0; i<scoobyGang.length; i++){
  console.log("You solved the case "+scoobyGang[i]);
 }




 //Create an array of bills
 var bills=[50, 10, 5, 20, 10, 40];

 //Create a variable and define it for total
 var total=0;

 //Create a loop to add up all of our bills from dinner
 for(var j=0; j<bills.length; j++){
  //Test to get each item in bills
  //console.log(bills[j]);

  //Only add up bills 15 and greater

  if(bills[j]>=15){
   //Add up the values of bills
   total += bills[j];

  }

 }

 console.log("The total of your bills is $"+total);