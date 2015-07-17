
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

 var cdsPerWeek;

 var timeBuyingCds;

 var ageStartedBuyingCds;

 var cdsPerMonth;

 var cdsPerYear;

 var cdsCollection;

 var cdStatistics;



 //This is the cost of brand new CDs
 var brandNewCdsCost;

 var personName;

 var personLastName;

 var personAge;

 var personStatistics;

 //money

 var moneyStatistics;

 var moneySpentPerMonth;

 var moneySpentPerYear;

 var painfulPart;

 var moneySpentOnCollection;

 moneyStatistics = [moneySpentPerMonth, moneySpentPerYear, moneySpentOnCollection];

 personStatistics = [personName, personLastName, personAge];

 cdStatistics = [cdprice, cdsPerWeek, timeBuyingCds, ageStartedBuyingCds, cdsPerMonth, cdsPerYear, cdsCollection];


 //This first part is an introduction part to not to make the calculator so boring.
 firstQuestion=prompt("Are you ready to discover how much money you spend on CDs in the last 10 years? (Answer yes or no.)");



 /*If the person answer yes, and no matter if it will be upper case or lower case, the program will recognize and answer an specific
   will be returned to the user. The same applies if he answer "no", anything else or even leave it empty.
  */
 if(firstQuestion.toLowerCase()==="yes"){
  console.log("Great! Let's start!");
  alert("Great! Let's start");
 } else if(firstQuestion===""){
   console.log("I know you were lazy to answer... It doesn't matter, we will continue.");
  alert("I know you were lazy to answer... It doesn't matter, we will continue.");
 }

 else {
  console.log("It doesn't matter, we will continue.");
  alert("It doesn't matter, we will continue.");
 }


 personName=prompt("What is your first name?");
 personName = (personName==="")? prompt("This is not a person's name.\nWhat is your name?") :personName;

 personLastName=prompt("And your last name?");
 personLastName= (personLastName==="")? prompt("This is not a person's name.\nWhat is your name?");

 personAge=prompt("How old are you?");
 personAge = (personAge==="")? prompt("This is no");




 if (personAge<=17){
  console.log("Hello "+personName+" "+personLastName+"! It looks like you are still a baby boy!");
  alert("Hello "+personName+" "+personLastName+"! It looks like you are still a baby boy!");
 }


 else if (personAge>=21 && personAge<=25){
  console.log("So you already are a a grown man or woman and was born in the 90\'s. That is great "+personName+"!!");
  alert("So you already are a a grown man or woman and was born in the 90\'s. That is great "+personName+"!!");
 }


 else if (personAge>=26 || personAge>26){
  console.log("I know you lived back in the 80's! I even think that you enjoyed the LPs era, but let's calculate your CDs!!");
  alert("I know you lived back in the 80's! I even think that you enjoyed the LPs era, but let's calculate your CDs!!");
 }

 ageStartedBuyingCds=prompt("What was you age when you started buying CDs?");

 timeBuyingCds =  (personAge-ageStartedBuyingCds);

 alert("Then you have been buying CDs for incredible "+timeBuyingCds+" years!");
 console.log("Then you have been buying CDs for incredible "+timeBuyingCds+" years!");

 alert("Let's make things more interesting...");
console.log("Let's make things more interesting...");


 cdprice=prompt("How much do you usually pay per CD since you were "+ageStartedBuyingCds+" and started buying it?");

 cdsPerWeek=prompt("And how many do you usually buy per week?");


 cdsPerMonth = cdsPerWeek * 4;

 cdsPerYear = cdsPerMonth * 12;

 cdsCollection = cdsPerYear * timeBuyingCds;


 if ((cdsPerWeek===isNaN) || (cdsPerWeek==="") ){
  console.log("Please, answer again making sure to put only numbers.");
  alert("Please, answer again making sure to put only numbers.");
 } else {
  alert("Great! That means that you buy an average of "+ cdsPerMonth+" CDs per month and "+cdsPerYear+" CDs per year, making your collection to be around "+cdsCollection+" CDs today!!");
  console.log("Great! That means that you buy an average of "+ cdsPerMonth+" CDs per month and "+cdsPerYear+" CDs per year, making your collection to be around "+cdsCollection+" CDs today!!");

 }

 moneySpentOnCollection = cdsCollection * cdprice;

 painfulPart=prompt("Now it's time for the painful part, are you prepared? (Answer yes or no.)");

 if (painfulPart.toLowerCase()==="yes"){
  alert("Through all these "+timeBuyingCds+" years buying CDs, you spent an entire amount of $"+moneySpentOnCollection+" dollars. ");
  console.log("Through all these "+timeBuyingCds+" years buying CDs, you spent an entire amount of $"+moneySpentOnCollection+" dollars. ");
 }

 else if ((painfulPart.toLowerCase()==="no") || (painfulPart==="")){
  alert("It looks you are not brave enough...");
  console.log("It looks you are not brave enough...");
 }

 else {
  alert("You'd better remain in silent... You could have had a heart attack!");
  console.log("You'd better remain in silent... You could have had a heart attack!");
 }




