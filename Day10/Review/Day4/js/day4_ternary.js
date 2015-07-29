
 /*
Lucas Alencar
Section 00 
7-14-15
Ternary
 */

//alert("Test It");

 //See if your GPA is high enough to graduate!

 var gpa = 3.9;

 //If your GPA is over than 2.0 then you can graduate.
 if(gpa>2){
     console.log("Congrats, you can graduate.");
 } else{
     console.log("Sorry, your gpa is too low.");
 }


 //Convert this to a Ternary
 //(Condition to test)? true code : false code;
 (gpa>2)? console.log("Gpa is great!"):console.log("GPA is too low");


 //Test kids age versus what book they should read
 //If the kid is under 10 then they can read Green eggs & Ham, other wise they read the Time Machine
  var age = 12;
  var book;

 book = (age>10)? "The Time Machine" : "Green Eggs & Ham";
 var book2 = (age<=10)? "Green Eggs & Ham" : "The Time Machine";
 console.log("Your kid should read "+book);
 console.log(book2);