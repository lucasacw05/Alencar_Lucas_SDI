 /*
Shaun M. Rogers
Section 00
July 18, 2015
Validating Prompts With Loops
 */

//alert("Testing to see if this works");

 //isNaN (item to test)
 //true if not a number
 //false if it is a number

 //To test blank we test (item ==="")

 //To test text strings
 //(item.toLowerCase() != "yes" && item.toLowerCase() !="no"

 //For Validation we use a while loop
 //Use a while loop because we don't know how many times the user will get it wrong

 //Ask the user for a number
 var userNum = prompt ("Please enter in a number");
 //Directly after each prompt, validate for that prompt
 while(isNaN(userNum) || userNum===""){
     //re-prompt using the same variable
     userNum = prompt("Please only use numbers and don't leave blank.\nPlease type in a number.");
 }
console.log("After the while loop.");

 var counter = 0;

 
 //Ask the user for either red or black
 var color = prompt("Please choose red or black:");
 //Validate!!!!
 while(color.toLowerCase() !="red" && color.toLowerCase() !="black"){
     //re-prompt using the same variable
     color = prompt("Please only type red or black.\nChoose your color");
     counter++;
     if(counter >10){
         console.log("You have tried too many times");
         break;
     }
 }