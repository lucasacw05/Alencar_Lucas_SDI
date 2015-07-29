
 /*
Lucas Alencar
Section 00 
7-16-2015
Steak
 */

//alert("Test It");

 //Test steak temperature to see if it is done

 /*

  Extra-rare or Blue (bleu)		115–120 °F
  Rare (saignant)	120–130 °F
  Medium rare (à point)	 130–140 °F
  Medium (demi-anglais)	140–150 °F
  Medium well (cuit)	150–160 °F
  Well done firm	160 °F+	160 °F

  */

 //Create a variable for steak Temp

 var steakTemp;

 do{
  steakTemp = prompt("What is the temperature in F of your steak. Please, make sure to insert only numbers.");
 } while(isNaN(steakTemp) || steakTemp === "");



 //Validate the user prompt
 console.log(isNaN(7));
 console.log(isNaN("car"));

 if(isNaN(steakTemp)){
  //Code will run if steakTemp is not a number
  //Re-prompt using the same variable for the user
  steakTemp=prompt("Please, only type in numbers. \nWhat is the temperature in F of your steak?");
 }

 if (steakTemp<=115){
  console.log("This steak is raw, do not eat it!");
 } else if (steakTemp<=120){
  console.log("This steak is extra-rare.");
 } else if (steakTemp<=130){
  console.log("This steak is rare.");
 } else if (steakTemp<=140){
  console.log("This steak is Medium Rare.");
 } else if (steakTemp<=150){
  console.log("The steak is Medium.");
 } else if (steakTemp<=160){
  console.log("This steak is Medium Well.");
 } else {
  console.log("The steak is Well Done.");
 }