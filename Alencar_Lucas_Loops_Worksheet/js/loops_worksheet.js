
 /*
Lucas Alencar
Section 00
7-20-2015
Loops Worksheet
 */

//alert("Test It");

 //This is the beginning of day 6 activity - Loops worksheet.

 var pizzaPrice;
 pizzaPrice = 4;

 
 var moneyEnough;
 var pizzasOrdered;
 var moneyInWallet;
 var firstQuestion;

 firstQuestion=prompt("Are you the person who wants to order pizzas for the zombie apocalypse, right?");
if(firstQuestion.toLowerCase() === "yes"){

 pizzasOrdered=prompt("How many pizzas would you like to order to stock for the zombie apocalypse?");
 if(pizzasOrdered > 30){
  alert("Great! It looks like you really want to survive!");
  moneyInWallet=prompt("Great, how much money do you have in your wallet? The cost of each pizza is $4");
  if(moneyInWallet >(pizzasOrdered * pizzaPrice)){
   alert("It looks like you have enough money my friend, you are good to go.");
   alert("Here, take your order.");
  } else {
   alert("I'm sorry, but there is no pizza for you");
  }



 }


   else
 for(pizzasOrdered; pizzasOrdered < 31; pizzasOrdered++){
  alert("I still think that this is not enough... We only accept orders of 30 or more pizzas. We help you survive, not to have fun. Let's help you survive adding 1 pizza per time to your order until you have at least 30. Be calm, imagine how many orders we do have. Until now you have "+pizzasOrdered+" pizzas.");
 if (pizzasOrdered === 30){
  alert("I think that now it is enough.");
  break;
 } moneyInWallet=prompt("Great, how much money do you have in your wallet? The cost of each pizza is $4");
  if(moneyInWallet >(pizzasOrdered * pizzaPrice)){
   alert("It looks like you have enough money my friend, you are good to go.");
   alert("Here, take your order.");
  } else {
   alert("I'm sorry, but there is no pizza for you");
  }
 }






} else if(firstQuestion.toLowerCase() === "no"){
 alert("Never mind, you might be the wrong person.");
}
 else {
 while (isNaN === (firstQuestion) || firstQuestion === "") {
  firstQuestion = prompt("Please, answer \"yes\" or \"no\".\nAre you the person who wants to order pizzas for the zombie apocalypse?");
 if(firstQuestion.toLowerCase() === "no"){
  alert("Never mind, you might be the wrong person.");
 }

 else if(firstQuestion.toLowerCase() === "yes"){
  pizzasOrdered=prompt("How many pizzas would you like to order to stock for the zombie apocalypse?");
  if(pizzasOrdered > 30){
   alert("Great! It looks like you really want to survive!");
  }
   moneyInWallet=prompt("Great, how much money do you have in your wallet? The cost of each pizza is $4");
  if(moneyInWallet >(pizzasOrdered * pizzaPrice)){
   alert("It looks like you have enough money my friend, you are good to go.");
   alert("Here, take your order.");
  } else {
   alert("I'm sorry, but there is no pizza for you");
  }

 }

 }
}


