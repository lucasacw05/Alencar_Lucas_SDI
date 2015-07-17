
 /*
Lucas Alencar
Section 00 
7-16-15
Nesting Ifs
 */

//alert("Test It");

 //Some decisions affect other decisions

 //If it is warm outside, let's go to the beach.
 //If it is NOT warm outside, let's go to the movies

 //Get temperature as a variable
 var temp=78;
 var waterTemp=74;

 //test the temperature
 //Warm is 80 and above

 if (temp>=80){
  //Code will run if temp is 80 + , go to the beach.
  console.log("Let's go to the beach");

            //If the water is above 75 degrees, lets go swimming. If not, let's get a tan.
            if(waterTemp>75){
             console.log("Let's go swimming!");
            } else{
             console.log("Let's get a tan!")
            }

 } else{
  console.log("Let's go see a movie!");

  //Ask if kids are going with
  var kids=prompt("Are you bringing children?\nPlease type in yes or no.");

  //Validate the kids prompt
  //Expectiong yes or no

  if(kids.toLowerCase()!="yes" && (kids.toLowerCase()!="no")){
   //re-prompt the user
   kids = prompt("Please, only type in yes or no.\nAre you bringing children?");
  }



  //If kids are comming to the movies, go see Minions
  //If not then go see Antman
  // .toLowerCase() - changes the text to lower case
  console.log(kids.toLowerCase());
  //Permenently changes the value. ********
  //kids=kids.toLowerCase(); ---- Changes the value forever
  console.log(kids);

 if(kids.toLowerCase()==="yes"){
  console.log("Go see the Minions movie!");
 } else {
  console.log("Go see Antman!");
 }


 }

