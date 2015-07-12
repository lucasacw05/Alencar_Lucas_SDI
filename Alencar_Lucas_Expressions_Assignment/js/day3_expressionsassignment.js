
/*
 Lucas Alencar
 Section 00
 7-11-2015
 Expressions Assignment
 */

alert("This is Lucas Alencar's Expressions Assignment. Enjoy it!");
console.log("This is Lucas Alencar's Expressions Assignment. Enjoy it!");

//This is the starting point of the Expressions Assignment started on Day 3.

//Now I'm going to build the first arrays for the days of the week and later use it to calculate how much time one student spend to go by bike to the Scalable Database Infrastructures classes, even on rainy days.

alert("Let\'s calculate how much time I could spend going to school");
console.log("Let\'s calculate how much time I could spend going to school");

//This represents the days of the week that the student go to the classes.
//I added parseInt to turn all the prompts below on real numbers so that they will be able to be added. They are no longer text anymore.
var timeOnTuesdays = parseInt(prompt("How long did you spend in minutes on your bike to go to classes last Tuesday?"));
console.log("You spent "+timeOnTuesdays+" minutes going to classes on last Tuesday");

var timeOnThursdays = parseInt(prompt("How long did you spend in minutes on your bike to go to classes last thursday?"));
console.log("You spent "+timeOnThursdays+" minutes going to classes on last Thursday");

var timeOnSaturdays = parseInt(prompt("How long did you spend in minutes on your bike to go to classes last Saturday?"));
console.log("You spent "+timeOnSaturdays+" minutes going to classes on last Saturday");

//This is the array to represent those days.
var onBikeToSdiDays = [timeOnTuesdays, timeOnThursdays, timeOnSaturdays];

//This is the total time the student spent on his bike at the last week.
//Here I also used the properties of array as shown below.
var totalOnBikeTimeToGo = (onBikeToSdiDays[0]) + (onBikeToSdiDays[1]) + (onBikeToSdiDays[2]);

//I added this alert so that the person will be able to see how much time he or she spent going to SDI classes through the week.
alert("During your last week, you spent a total of "+totalOnBikeTimeToGo+" minutes on bike going for SDI classes");
console.log("During your last week, you spent a total of "+totalOnBikeTimeToGo+" minutes on going for SDI classes");

//This is the average the student spent on his bike going to his classes in the last week.
var averageOnBikeToSdiDays =  (totalOnBikeTimeToGo /= 3);
alert("The average of minutes that you spent last week going to SDI classes was "+averageOnBikeToSdiDays+".");
console.log("The average of minutes that you spent last week going to SDI classes was "+averageOnBikeToSdiDays+".");

//Then I supposed that on rainy days, the student suffers a delay of his average time spent on bike during normal days divided by two. Adding this time to the total time he spent during the week, we have the total time he spent on rainy days.
var fullTimeOnRainyDays = averageOnBikeToSdiDays/2 + totalOnBikeTimeToGo;
alert("That means that on rainy days you will probably spend around "+fullTimeOnRainyDays+" minutes going to your SDI classes");
console.log("That means that on rainy days you will probably spend around "+fullTimeOnRainyDays+" minutes going to your SDI classes");

//By last, this is the average of time the student spent going to classes on rainy days.
var averageRainyDays = fullTimeOnRainyDays/3;
alert("And your average on bike going to classes at rainy days in minutes is "+averageRainyDays+" .");
console.log("And your average on bike going to classes at rainy days in minutes is "+averageRainyDays+" .");

/*
To test the project and to make sure that everything is working, I put 13 minutes to Tuesday, 17 minutes to Thursday and
20 minutes to Saturday and had the total of 50 minutes spent on my bike during the last week going to SDI classes. Then,
I had an average of 16.6 minutes per week. The calculator also confirmed that if it was a rainy week, I should had spend
58.33 minutes for the total time of the week and 19.44 minutes of average per day during a rainy week. Everything works!
 */




