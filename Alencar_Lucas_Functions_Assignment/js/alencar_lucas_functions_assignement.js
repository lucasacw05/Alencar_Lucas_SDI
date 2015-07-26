
 /*
Lucas Alencar
Section 00
7-25-2015
Functions Assignment.
 */

alert("This is Lucas Alencar's Functions Assignment. Enjoy it.");
 console.log("This is Lucas Alencar's Functions Assignment. Enjoy it.");

 //These three first Variables are the Variable for the the first problems.
 var radius;
 var length;
 var height;


 //This is the Variable for the first question and right below it you have it's validation with loops, if and else statements.
 var firstQuestion=prompt("Did you know that the internet that you use everyday is basically a lot of giant cables overseas through all the world?");
  while(firstQuestion === "" || !(isNaN(firstQuestion))){
  firstQuestion=prompt("Please, answer \"yes\" or \"no\".")
 } if(firstQuestion.toLowerCase()==="yes"){
  alert("You look to be smart, then! That's not the kind of information that everybody knows! I'm happy for you!");
 } else{
  alert("Yeah! The internet is connected all over the world by unknown heroes (huge cables) that are all over the place!");
 }
 console.log("Did you know that the internet that you use everyday is basically a lot of giant cables overseas through all the world?");
 console.log(firstQuestion);


 //This is the Variable for the second question and right below it you have it's validation with loops, if and else statements.
 var secondQuestion=prompt("What about calculating the volume of those giant cables for any length you want to? Let's do it?!!");
 while(secondQuestion === "" || !(isNaN(secondQuestion))){
  secondQuestion=prompt("Please, type only \"yes\" or \"no\" and don't leave it blank.")
 } if(secondQuestion.toLowerCase()==="yes") {
  alert("Great! we will do this because you want to and because this idea is awesome!!");
  console.log("What about calculating the volume of those giant cables for any length you want to? Let's do it?!!");
  console.log(secondQuestion);



  alert("Before we start, if we were going to do everything as it really is in real life, things could start to be boring.");
  console.log("Before we start, if we were going to do everything as it really is in real life, things could start to be boring.");


  //This is the Variable for the radius of the cable and right below it you have it's validation with loops, if and else statements.
  radius = prompt("By first, choose the size of the radius in meters.");
  while (radius === "" || isNaN(radius)) {
   radius = prompt("Please, type only type numbers and don't leave it blank.")
  }
  if (!(isNaN(radius))) {
   alert("Awesome choice!!");
  }
  console.log("By first, choose the size of the radius in meters.");
  console.log(radius);

//This is the Variable for the length of the cable and right below it you have it's validation with loops, if and else statements.
  length = prompt("By last, choose its length.");
  while (length === "" || isNaN(length)) {
   length = prompt("Please, type only type numbers and don't leave it blank.")
  }
  if (!(isNaN(length))) {
   alert("Soon you will see the magic number!");
  }
  console.log("By last, choose its length.");
  console.log(length);

//This variable below corresponds to an Anonymous Function to calculate the total volume of the Internet Cable with the inputs provided by the user.
  var totalVolume = function (r, l) {
   //This is to calculate the area of the circumference
   var areaCircumference = r * r * Math.PI;

   //This other one is to calculate the volume of the cable.
   var volume = areaCircumference * l;
   console.log(volume);

   //This is to return the result to outside of the function.
   return volume;
  };


//This is the variable to store the first result after the variable call.
  var resultVolume = totalVolume(radius, length);
  console.log();

  //This is the final result of the first calculation.
  alert("The total volume of your own wonderful version of the Amazing Internet Cable is " + Math.round(resultVolume) + " cubic meters!!!");
  console.log("The total volume of your own wonderful version of the Amazing Internet Cable is " + Math.round(resultVolume) + " cubic meters!!!");


  //These are some alerts to keep the flow of the activity.
  alert("There is definitely more than were it came from!");

  alert("After so hard calculations, let's pretend your are going to eat an ice cream!\nThe ice cream you want to eat comes not inside a cone, but a pyramid! Let's calculate its volume! What a fun thing to do!");


//This is the Variable for the the width of the pyramid and right below it you have it's validation with loops, if and else statements.
  var width2 = prompt("Let's start with the width of the pyramid. Type only numbers.");
  while (width2 === "" || isNaN(width2)) {
   width2 = prompt("Please, type only type numbers and don't leave it blank.")
  }
  if (!(isNaN(width2))) {
   alert("Great!!!");
  }
  console.log("Let's start with the width of the pyramid. Type only numbers.");
  console.log(width2);


//This is the Variable for the length of the pyramid and right below it you have it's validation with loops, if and else statements.
  var length2 = prompt("Now it's time for the length! Type here again. You know what you need to do.");
  while (length2 === "" || isNaN(length2)) {
   length2 = prompt("Please, type only type numbers and don't leave it blank.")
  }
  if (!(isNaN(length2))) {
   alert("You love Ice Cream, don't you?");
  }
  console.log("Now it's time for the length! Type here again. You know what you need to do.");
  console.log(length2);


//This is the Variable for the height of the pyramid and right below it you have it's validation with loops, if and else statements.
  var height2 = prompt("By last, type the height of your pyramid.");
  while (height2 === "" || isNaN(height2)) {
   height2 = prompt("Please, type only type numbers and don't leave it blank.")
  }
  if (!(isNaN(height2))) {
   alert("YEAAAHHH!");
  }
  console.log("By last, type the height of your pyramid.");
  console.log(height2);


  //This is my second function, but not an Anonymous one. You can basically calculate the volume of a pyramid with it. Using "w" for width, "l" for length and "h" for height.
  function calcPyramid(w, l, h) {

   //This is to calculate the base.
   var base = w * l;

   //This variable is to calculate the volume.
   var volume = base * (h / 3);

   console.log(volume);

   //This is to return the result to outside of the function.
   return volume;
  }

  //This is the variable to store the result of the second calculation.
  var resultVolume2 = calcPyramid(width2, length2, height2);


  //This is the alert and console log to bring back the information to the user.
  alert("The volume of your Ice Cream \"cone\" that is a Pyramid is " + Math.round(resultVolume2) + " cubic in the unit you wanted to be. Remember I only asked you the numbers. Have fun with Code and with Life! Thanks!");
  console.log("The volume of your Ice Cream \"cone\" that is a Pyramid is " + Math.round(resultVolume2) + " cubic in the unit you wanted to be. Remember I only asked you the numbers. Have fun with Code and with Life! Thanks!");
 }
//This is the else statement in case of the person not to be interested about participating at the beginning of the "challenge".
 else{
  alert("You are boring, and it's worse than I thought!");
  console.log("You are boring, and it's worse than I thought!");
 }

 /*I already tested the application several times and it runs smoothly with all the functions and validations.
  I basically did an interesting calculator to calculate the volume of those giant internet cables that
  connects the world and that most of people don't even know about it. I also did another calculator to discover the
  volume of a pyramid and it also works perfectly. Those were the test comments. Thanks for your time!!
  */

  //Student: Lucas Alencar
