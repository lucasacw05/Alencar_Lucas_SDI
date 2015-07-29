/*
 This is going to be a multi lined comment
 Lucas Alencar
 7-9-2015
 SDI Section 00
 Day 2 Lab Instructional Expressions
 */
alert("Instructional Expressions");

//Console Logging information
console.log("This is the console for Instructional Expressions.");

// Here it is the problems to be solved.

/*
 Slice	of	Pie	part	1
 A	bunch	of	students	are	having	a	party	and	somebody	ordered	pizza.	Create	an	expression	that
 calculates	how	much	pizza	each	partygoer	will	get at	the	party.		(Assume	all	pizzas	have	the
 same	number	of	slices	and	that	the	person	dividing	the	pizza	is	really	precise,	so	this	can	be	a
 decimal,	like	3.52	slices,	etc.)

 Given:
  Number	of	slices	per	pizza = 8
  Number	of	people	at	the	party = 20
  Number	of	pizzas	ordered. = 10

 Result	Variables:
  Number	of	slices	per	person.	= 4

 Result	Format:
  “Each	person	ate	X	slices	of	pizza	at	the	party.”
 */

console.log("Slice of Pie part I\n\n");

//Here is the quantity of slices that each pizza contains.
var slicesPerPizza = 8;
console.log("The number of slices per pizza is "+slicesPerPizza+".");

//This is the total number of people that is at the party.
var totalPeople = 20;
console.log("The total number of people that went to the party is "+totalPeople+".");

//The number of ordered pizzas
var totalPizzas = 11;
console.log("The total number of pizzas ordered for the party is "+totalPizzas+".");

//This is the result of how many slices there is for each person at the party
var slicesPerPerson = totalPizzas * slicesPerPizza /totalPeople;
console.log("At the party there is a total amount of "+slicesPerPerson+" slices for each person.");


/*
 Slice	of	Pie part	II
 At	the	pizza	party	Sparky,	the	host’s	dog	is	excited,	because	he	gets	the	leftover	pizza	after	the
 slices	have	been	divided	up	evenly	among	the	guests.	Assume	guests	get	whole slices,	how
 many whole slices	will	Sparky	feast	on?

 Example	data	set: 10	people,	4	pizzas	and	8	slices	per	pizza	will	mean	each	person	eats	3	slices
 and	Sparky	gets	2	slices.	(Note	that	this	is	an	example,	your	code	should	work	and	give	me	the
 accurate	results	no	matter	what	numbers	I	put	in	for	those	given	variables.)
 Given:

  Don’t	make	new	given	variables/constants	for	this.	Instead	use	the	givens	you	set	up
 for	Slice	of	Pie	I.
 Result	Variables:

  Number	of	slices	Sparky	gets	to	eat.
 Result	Format:

  “Sparky	got	X slices	of	pizza.
 */

console.log("Slice of Pie part II \n\n");

//Total number of slices that each guest will be able to eat

//Number of slices Sparky got
var sparkySlices = totalPizzas * slicesPerPizza % totalPeople;

console.log("Sparky got "+sparkySlices+" slices of pizza.");



/*
 Average	shopping	bill
 You	are	budgeting	your	money	for	the	year	and	must	calculate	your	average	weekly	grocery
 shopping	spending	over	the	past	five	weeks.	Calculate the	average	amount	spent	on	groceries.

 Givens:
  5	weekly	grocery	bills.

 Result	Variable:
  Total	amount spent	on	groceries.
  Average	weekly	grocery	spending.

 Result	Format:
  “You	have spent	a	total	of	$X on	groceries	over	5	weeks.	That	is	an	average	of	$X per
 week”
 */



var groceriesweek1;
groceriesweek1=prompt("How much did you spend on first week?");
do{groceriesweek1=prompt("How much did you spend on fifth week?");
} while(isNaN(groceriesweek1) || groceriesweek1 === "");

var groceriesWeek2;
groceriesWeek2=prompt("How much did you spend on second week?");
do{groceriesWeek2=prompt("How much did you spend on fifth week?");
} while(isNaN(groceriesWeek2) || groceriesWeek2 === "");

var groceriesWeek3;
groceriesWeek3=prompt("How much did you spend on third week?");
do{groceriesWeek3=prompt("How much did you spend on fifth week?");
} while(isNaN(groceriesWeek3) || groceriesWeek3 === "");

var groceriesWeek4;
groceriesWeek4=prompt("How much did you spend on fourth week?");
do{groceriesWeek4=prompt("How much did you spend on fifth week?");
} while(isNaN(groceriesWeek4) || groceriesWeek4 === "");

var groceriesWeek5;
do{groceriesWeek5=prompt("How much did you spend on fifth week?");
 } while(isNaN(groceriesWeek5) || groceriesWeek5 === "");

var groceries5week = groceriesweek1 + groceriesWeek2 + groceriesWeek3 + groceriesWeek4 + groceriesWeek5;

var averageByWeek = groceries5week /5;

console.log("Discounts:\n\n");

console.log("You have spent a total of "+groceries5week+" on groceries over 5 weeks. That is an average of $"+averageByWeek+" per week.");













/*Discounts
 Calculate	the	discounted	price	for	an	item.	Create	an	expression	that	will	calculate	the
 discounted	price	with	and without sales	tax.	(It	is	acceptable	for	the	result	to	have	more	than
 two	digits	after	the	decimal.	$345.896	for	example.)

 Givens:
  Original	price
  Discount	percentage
  Description	of	item
  Sales	tax	percentage

 Result	Variables:
  Price	of	the	item	with	tax
  Price	of	the	item	without	tax

 Result	Format:
  “Your	X was	originally	$X,	but	after	a	X%	discount,	it	is	now	$X without	tax,	and	$X
 with	tax.”
*/


//That is where this problem starts on the console
console.log("Discount Problem: \n\n");

//The product's original price
var originalPrice = 1000;
console.log("The original price of the product is "+originalPrice);

//This is the discount percentage
var discountPercentage = 15;

var discDecimal = discountPercentage / 100;
console.log("The product's discount percentage is "+discountPercentage);

//This is the price of the product with discount
var priceWithDiscount = originalPrice - (originalPrice * discDecimal);
console.log("The product with discount of "+discountPercentage+" and no taxes is "+priceWithDiscount);

//Item description
var itemDescription = ("amazing computer");

//Tax percentage
var taxPercentage = 5/100;
console.log("It also has a sale tax percentage of "+taxPercentage+" applied to it");

//This is the price with tax
var priceWithTax = priceWithDiscount * taxPercentage + priceWithDiscount;

console.log("Your "+itemDescription+" was originally "+originalPrice+ ", but after a "+discountPercentage+" discount, it is now "+priceWithDiscount+" without tax, and "+priceWithTax+" with tax.");