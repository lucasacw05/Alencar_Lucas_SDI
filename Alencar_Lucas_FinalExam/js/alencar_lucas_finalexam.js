
 /*
Lucas Alencar
Section 00 
7-30-2015
Final Exam
 */

 //This is the first alert to make sure that the js and html documents are connected.
alert("This is Lucas Alencar's Final Exam.");

 //This is to say that the user is going to calculate the price of any item he or she wants with the discount in percent that he or she choose.
 alert("Welcome User!\nLet's calculate the price of any item you want with any discount you would like to!");

  //This is the variable for the price of the item and below it there is a while loop to validate the variable.
  var itemPrice = prompt("By first, make sure to type the cost of the item you want to calculate.\nMake sure to type only numbers. Anything else will be accepted");
  while(isNaN(itemPrice) || itemPrice === ""){
  itemPrice=prompt("Again, type only numbers.");
 }
 //This is the variable for the discount in percentage of the item and below it there is a while loop to validate the variable.
 var itemDiscount = prompt("Now, type the discount in percentage that you would like to see the price of the product.\nDon't worry about the percentage symbol, we will put that for you.");
 while( (isNaN(itemDiscount) || itemDiscount === "") || (itemDiscount < 0 || itemDiscount > 100) ){
  itemDiscount = prompt("Please, do it again. The number must be between 0 and 100 and you can't leave it blank or type letters.");
 }

 //This is the function to calculate the item with discount.
 function funcDiscount(itemPrice, itemDiscount){
  var itemWithDiscount = itemPrice * (1-(itemDiscount/100));
  return itemWithDiscount;
 }

 //This is the variable to catch the results for the function above.
var results = funcDiscount(itemPrice, itemDiscount);

 //These are the console.log and alert to give the feedback to the user that is using the calculator.
 console.log("The final cost of an item that costs $"+itemPrice+" with a discount of "+itemDiscount+"% is "+results+".");
 alert("The final cost of an item that costs $"+itemPrice+" with a discount of "+itemDiscount+"% is "+results+".");


 //Everything is tested and the code runs with no bugs or problems. The calculator to discover the price of an item works pretty well.