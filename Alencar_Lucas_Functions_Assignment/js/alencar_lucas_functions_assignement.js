
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

/*
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
 } if(secondQuestion.toLowerCase()==="yes"){
  alert("Great! we will do this because you want to and because this idea is awesome!!");
 } else{
  alert("It looks like you will have to do it in any way! Hahaha");
 }
 */


alert("Before we start, if we were going to do everything as it really is in real life things could start to be boring.");

 radius=prompt("By first, choose the size of the radius in meters.");
 height=prompt("By second, choose the height of the internet cable.");
 length=prompt("By last, choose its length.");

 var totalVolume = function (r, h, l) {

  var areaCircumference = r*r*Math.PI;
  var volume = areaCircumference*l;
  console.log(volume);
  return volume;
 };

 var resultVolume = totalVolume(radius, height, length);


 //DON'T FORGET TO PUT THE LAST COMMENTS!!!