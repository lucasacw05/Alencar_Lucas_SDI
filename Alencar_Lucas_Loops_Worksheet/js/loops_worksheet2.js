
 /*
Lucas Alencar
Section 00 
7-21-2015
Loops Worksheet
 */

//alert("Test It");

 //This is the variable for the first name
 var firstName;

 //This is the variable for the last name
 var lastName;

 //This is the variable for the day of birth
 var dayOfBirth;

 //This is the variable for the month of birth
 var monthOfBirth;

 //This is the variable for the year of birth
 var yearOfBirth;

 //This is the variable for the username
 var userName;

 //This is the variable to ask about if the person had birthday this year
 var birthDayThisYear;

 //This is the variable for the person's age
 var age;

 var i = 20;


 firstName=prompt("Let's create your profile for this brand new social media!\nInsert here your first name:");

 while(!(isNaN(firstName)) || firstName===""){
  firstName = prompt("Please, answer your with your first name. No blank spaces or numbers will be accepted.");
 }

 do{
  lastName=prompt("Now, it is time for your last name. Insert it with no blank spaces or numbers.:");
 } while(!(isNaN(lastName)) || lastName==="");

 do{
  dayOfBirth=prompt("In what day of the month you were born?");
 } while((isNaN(dayOfBirth)) || dayOfBirth==="" || dayOfBirth>31);


while((isNaN(monthOfBirth)) || monthOfBirth==="" || monthOfBirth>12){
 monthOfBirth=prompt("What is your month of birth?");
}

 yearOfBirth=prompt("Take it easy, we are almost at the end.\n In what year you were born?");
 while(isNaN(yearOfBirth) || yearOfBirth===""){
  yearOfBirth=prompt("Please, don't leave blank.\nType only numbers.");
 }

 birthDayThisYear=prompt("Did you already celebrate birthday this year?");
 if(birthDayThisYear.toLowerCase()==="yes"){
  age=2015-yearOfBirth
 } else{
  age=2014-yearOfBirth
 }

 confirm("Ready to see your profile?");


 do {
  userName = prompt("By last, what username would you like to use?");
 } while (!(isNaN(userName)) || userName==="");

 for(var i=10; i>=1; i--){
  alert("You will see it in "+i);
 }

 alert("This is your brand new profile!\nYour name is "+firstName+" "+lastName+"\nYou were born in "+monthOfBirth+"/"+dayOfBirth+"/"+yearOfBirth+", being "+age+" years old and your new username is "+userName+".");
