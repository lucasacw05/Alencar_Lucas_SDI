
 /*
Lucas Alencar
Section 00 
7-21-2015
Array Loop Worksheet
 */

//alert("Test It");

 var numRockBand;
 var whoAreThey;
 var whoAreThey = [];
 var questionTentation;
 var firstPeopleToShare;
 var totalShared = 0;
 var days;


 do{
 var band=prompt("What is the name of your Solo Career Band? Do not leave the space blank.");
 } while(band===""){}

 do{
 numRockBand=prompt("How many people does it have? Type only numbers.");
 } while(isNaN(numRockBand) || numRockBand===""){}

for(var i = 0; i < numRockBand; i++) {
 var rockerName = prompt("Who are they? Answer each question for each person.");
 whoAreThey.push(rockerName);
}
 console.log(whoAreThey);




 questionTentation=prompt("Would you like to share your music with thousands of people or at least know how many people your music could reach by sharing it and asking for people to do the same?");
 if(questionTentation.toLowerCase()==="yes"){


  firstPeopleToShare=parseInt(prompt("Great! How many people do you pretend to make each person of your band including you to share the music with per day?"));

 days=parseInt(prompt("For how many days do you pretend to calculate the progress of the perfect share?"));


 for (var j=1; j<=days; j++) {
  prevShared = totalShared;
  totalShared = numRockBand*=firstPeopleToShare;
  totalShared += prevShared;
  console.log(totalShared);

  alert("You will be reaching day "+j+" sharing it with the amount of "+totalShared+" people reached.");


 }

                                           }


 else{
 alert("Never mind, you will never be famous.")
}


