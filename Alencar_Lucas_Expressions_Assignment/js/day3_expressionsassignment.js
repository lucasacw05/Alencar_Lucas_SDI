
/*
 Lucas Alencar
 Section 00
 7-11-2015
 Expressions Assignment
 */

alert("This is Lucas Alencar's Expressions Assignment. Enjoy it!");

//This is the starting point of the Expressions Assignment started on Day 3.

//Now I'm going to build the first arrays for the days of the week and later use it to calculate how much time one student spend to go by bike to the Scalable Database Infrastructures classes, even on rainy days.

alert("Let\'s calculate how much time I could spend going to school");

//This represents the days of the week that the student go to the classes.
//I added parseInt to turn all the prompts below on real numbers so that they will be able to be added. They are no longer text anymore.
var timeOnTuesdays = parseInt(prompt("How long do you spend on bike to go to classes last Tuesday?"));
console.log("You spent "+timeOnTuesdays+" minutes going to classes on last Tuesday");

var timeOnThursdays = parseInt(prompt("How long do you spend on bike to go to classes last thursday?"));
console.log("You spent "+timeOnThursdays+" minutes going to classes on last Thursday");

var timeOnSaturdays = parseInt(prompt("How long do you spend on bike to go to classes last Saturday?"));
console.log("You spent "+timeOnSaturdays+" minutes going to classes on last Saturday");

//This is the array to represent those days.
var onBikeToSdiDays = [timeOnTuesdays, timeOnThursdays, timeOnSaturdays];

//This is the total time the student spent on his bike at the last week.
var totalOnBikeTimeToGo = (timeOnTuesdays) + (timeOnThursdays) + (timeOnSaturdays);

alert("During your last week, you spent a total of "+totalOnBikeTimeToGo+" minutes going for SDI classes");

var averageOnBikeToSdiDays =  totalOnBikeTimeToGo /3;

var averageOnRainyDays = averageOnBikeToSdiDays/2 + totalOnBikeTimeToGo;

var totalOnBike;

