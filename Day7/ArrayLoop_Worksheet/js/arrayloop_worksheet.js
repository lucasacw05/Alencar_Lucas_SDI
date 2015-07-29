
 /*
Lucas Alencar
Section 00 
7-21-2015
Array Loop Worksheet
 */

//alert("Test It");

 //This variable represents the how many people the Rock Band has.
 var numRockBand;


 var whoAreThey;

 //This array represents the names of the people who is part of the band.
 var whoAreThey = [];

 //This variable represents the question that if answered "yes", allows the person to do the main goal of the code.
 var questionTentation;

 //This variable represents the first people that will listen the music after the band.
 var firstPeopleToShare;

 //This variable represents the total times the music was shared.
 var totalShared = 0;

 //This variable represents the amount of days chosen to calculate how many times the music will be shared.
 var days;

 //This variable represents how many times the music was already shared at some point.
 var prevShared;


 //This validated prompt asks the person for the name of the band.
 do{
 var band=prompt("What is the name of your Rock Band? Do not leave the space blank.");
  console.log("What is the name of your Rock Band? Do not leave the space blank.");
 } while(band===""){}


 //This validated prompt asks the person how many people the band has.
 do{
 numRockBand=prompt("How many people does it have? Type only numbers.");
  console.log("How many people does it have? Type only numbers.");
 } while(isNaN(numRockBand) || numRockBand===""){}


 ////This validated prompt asks for the name of the band members.
for(var i = 0; i < numRockBand; i++) {
 var rockerName = prompt("Who are they? Answer each question for each person.");
 console.log("Who are they? Answer each question for each person.");
 whoAreThey.push(rockerName);
}

 //This is an alert to show by who the band is made of.
 alert("Great!, that means your band is made by "+whoAreThey+"!");
 console.log("Great!, that means your band is made by "+whoAreThey+"!");


 //This variable represents the question that if asnwered "yes", allows the person to do the main goal of the code.
 questionTentation=prompt("Would you like to share your music with thousands of people? You can also know how many people your music could reach by sharing it and asking for people to do the same. If you would like to, just type \"yes\".");
 console.log("Would you like to share your music with thousands of people? You can also know how many people your music could reach by sharing it and asking for people to do the same. If you would like to, just type \"yes\".");
 if(questionTentation.toLowerCase()==="yes"){


  //This variable represents the first people that will listen the music after the band.
  firstPeopleToShare=parseInt(prompt("Great! How many people do you want for each person of your band including you to share the music with? Pay attention that this is going to be per day." ));
  console.log("Great! How many people do you want for each person of your band including you to share the music with? Pay attention that this is going to be per day.");

  //This variable represents the amount of days chosen to calculate how many times the music will be shared.
 days=parseInt(prompt("For how many days do you pretend to calculate the progress of the perfect share?"));
  console.log("For how many days do you pretend to calculate the progress of the perfect share?");

  //This is the main part of the code. It calculates how many times the music was shared depending on the days, number of band members and people to share per time
 for (var j=1; j<=days; j++) {
  prevShared = totalShared;
  totalShared = numRockBand*=firstPeopleToShare;
  totalShared += prevShared;
  console.log(totalShared);

  alert("You will be reaching day "+j+" sharing it with the amount of "+totalShared+" people reached.");
  console.log("You will be reaching day "+j+" sharing it with the amount of "+totalShared+" people reached.");

 }

                                           }


 else{
 alert("Never mind, you will never be famous.");
  console.log("Never mind, you will never be famous");
}


