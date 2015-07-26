
 /*
Lucas Alencar
Section 00
7-25-2015
Functions Assignment.
 */

alert("This is Lucas Alencar's Functions Assignment. Enjoy it.");

 var radius;
 var length;
 var height;


var firstQuestion=prompt("Did you know that the internet that you use everyday is basically a lot of giant cables overseas through all the world?");
 while(firstQuestion === "" || !(isNaN(firstQuestion))){
  firstQuestion=prompt("Please, answer \"yes\" or \"no\".")
 } if(firstQuestion.toLowerCase()==="yes"){
  alert("You look to be smart, then! That's not the kind of information that everybody knows! I'm happy for you!");
 } else{
  alert("Yeah! The internet is connected all over the world by unknown heroes (huge cables) that are all over the place!");
 }

 var secondQuestion=prompt("What about calculating the volume of those giant cables for any length you want to? Let's do it?!!");

 while(secondQuestion === "" || !(isNaN(secondQuestion))){
  secondQuestion=prompt("Please, type only \"yes\" or \"no\" and don't leave it blank.")
 } if(secondQuestion.toLowerCase()==="yes") {
  alert("Great! we will do this because you want to and because this idea is awesome!!");


  alert("Before we start, if we were going to do everything as it really is in real life, things could start to be boring.");

  radius = prompt("By first, choose the size of the radius in meters.");
  while (radius === "" || isNaN(radius)) {
   radius = prompt("Please, type only type numbers and don't leave it blank.")
  }
  if (!(isNaN(radius))) {
   alert("Awesome choice!!");
  }


  length = prompt("By last, choose its length.");
  while (length === "" || isNaN(length)) {
   length = prompt("Please, type only type numbers and don't leave it blank.")
  }
  if (!(isNaN(length))) {
   alert("Soon you will see the magic number!");
  }


  var totalVolume = function (r, l) {

   var areaCircumference = r * r * Math.PI;
   var volume = areaCircumference * l;
   console.log(volume);
   return volume;
  };



  var resultVolume = totalVolume(radius, length);

  alert("The total volume of your own wonderful version of the Amazing Internet Cable is " + Math.round(resultVolume) + " cubic meters!!!");

  alert("There is definitely more than were it came from!");

  alert("After so hard calculations, let's pretend your are going to eat an ice cream!\nThe ice cream you want to eat comes not inside a cone, but a pyramid! Let's calculate its volume! What a fun thing to do!");


  var width2 = prompt("Let's start with the width of the pyramid. Type only numbers.");
  while (width2 === "" || isNaN(width2)) {
   width2 = prompt("Please, type only type numbers and don't leave it blank.")
  }
  if (!(isNaN(width2))) {
   alert("Great!!!");
  }


  var length2 = prompt("Now it's time for the length! Type here again. You know what you need to do.");
  while (length2 === "" || isNaN(length2)) {
   length2 = prompt("Please, type only type numbers and don't leave it blank.")
  }
  if (!(isNaN(length2))) {
   alert("You love Ice Cream, don't you?");
  }


  var height2 = prompt("By last, type the height of your pyramid");
  while (height2 === "" || isNaN(height2)) {
   height2 = prompt("Please, type only type numbers and don't leave it blank.")
  }
  if (!(isNaN(height2))) {
   alert("YEAAAHHH!");
  }


  function calcPyramid(w, l, h) {
   var base = w * l;
   var volume = base * (h / 3);
   console.log(volume);
   return volume;
  }

  var resultVolume2 = calcPyramid(width2, length2, height2);

  alert("The volume of your Ice Cream \"cone\" that is a Pyramid is " + Math.round(resultVolume2) + " cubic in the unit you wanted to be. Remember I only asked you the numbers. Have fun with Code and with Life! Thanks!");

 }

 else{
  alert("You are boring, and it's worse than I thought!");
 }

 //DON'T FORGET TO PUT THE LAST COMMENTS!!!