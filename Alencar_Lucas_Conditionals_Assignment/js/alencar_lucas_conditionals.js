
 /*
Lucas Alencar
Section 00 
7-16-15
Conditionals Assignment
 */

//alert("This is Lucas Alencar's Conditionals Assignment");

 //This is the beginning of Lucas Alencar's Conditionals Assignment.

 /*Let's Pretend the user is a CD collector and wants to know how much money he or she spent with it in the last 10 years
   depending of the frequency he or she used to spend on it by week.
     */

 //alert("Hello! It's great to have you here!");

 //This is the variable for que first question of the Money Spent Calculator
 var firstQuestion;


 var cdprice;

 //This is the cost of brand new CDs
 var brandNewCdsCost;

 var personName;

 var personLastName;

 var personAge;

 var personStatistics;

 var gender;

 personStatistics = [personName, personLastName, personAge];


 //This first part is an introduction part to not to make the calculator so boring.
 firstQuestion=prompt("Are you ready to discover how much money you spend on CDs in the last 10 years? (Answer yes or no.)");



 /*If the person answer yes, and no matter if it will be upper case or lower case, the program will recognize and answer an specific
   will be returned to the user. The same applies if he answer "no", anything else or even leave it empty.
  */
 if(firstQuestion.toLowerCase()==="yes"){
  console.log("Great! Let's start!");
 } else if(firstQuestion===""){
   console.log("I know you were lazy to answer... It doesn't matter, we will continue.");
 }

 else {
  console.log("It doesn't matter, we will continue.")
 }


 personName=prompt("What is your first name?");

 personLastName=prompt("And your last name?");

 personAge=prompt("How old are you?");


 if (personAge<=17){
  console.log("Hello "+personName+" "+personLastName+"! It looks like you are still a baby boy!");
  alert("Hello "+personName+" "+personLastName+"! It looks like you are still a baby boy!");
 } else if (personAge>=21 && personAge<=25){
  console.log("So you already are a a grown man or woman and was born in the 90\'s. That is great "+personName+"!!");
 } else if (personAge>=26 || personAge>26){
  console.log("I know you lived back in the 80's! I even think that you enjoyed the LPs era, but let's calculate your CDs!!")
 }





