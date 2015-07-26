
 /*
Lucas Alencar
Section 00
7-25-2015
Functions Assignment.
 */

alert("This is Lucas Alencar's Functions Assignment. Enjoy it.");


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



 //DON'T FORGET TO PUT THE LAST COMMENTS!!!