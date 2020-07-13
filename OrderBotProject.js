/* -------------------------------------------- 

	You've just learned about variables, conditionals, functions, and user input. 
	You've also created a basic calculator in a previous project.
	
	Now imagine you are going out to eat with two other friends.
	Are you at a restaurant for a meal? Are you grabbing boba? Or are you just going to an ice cream parlor?
	At the end of the meal, you and your friends have to split the bill. 

	Wouldn't it be great if we could automate that math?

					Let's try it!

  ----------------------------------r---------- 

Scenario Parameters: 

	When you and your friends eat out, each of you have the option to order one or multiple items.
	What kind of items are available to order?

	At the end of the order, the receipt comes and you all have to calculate the cost for each person:
	Don't forget the tax and tip!

After this program finishes running, it should output a specific total for each person

  -------------------------------------------- */

const READLINE = require("readline-sync");

/* -------------------------------------------- 

Part 1:
Let's start by asking taking the order of the group(you and two friends). What did each person order?

Write a function that will take the group's order:
- Prompt the user to enter the price of each item they ordered
- Return the cost 

Remember! Functions are meant to be reusable, so write a function that will work when called for each person!

-------------------------------------------- */



let userName = READLINE.question("hey kid. whats your name?");
let userOrder = READLINE.question("what would u want me to grab?-chips,soda,candy you know i cant let yall get stuff yall selves people be steallin.");
let Count = READLINE.question(`How many You Want?`);

let person1PriceOfSnack;

let person1PriceOfDrink;

let person1PriceOfTip;

var person1 = (`what would u like me to grab?`)

function whatYouFinnaOrder(Name, order, Count) {
	let cost;
	if (order == `chips`) {
		cost = 1.99

	} else if (order == `soda`) {
		cost = 2.29

	} else if (order == `candy`) {
		cost = .99
	} else {
		console.log("Scram kid we dont got what ya lookin for!")
		return 0
	}
	cost = (cost * Count)
	console.log(`hey ${Name} you have yo ${order} now gimme what ya owe me and scadaddle!! ${cost}`)
	return cost

}

let cost = whatYouFinnaOrder(userName, userOrder, Count)

let tax = 1.1
cost = cost * tax
let tip = READLINE.question(`What ya finna gimmne for a tip?-0%,10%,30%?`)

if (tip == "0%")

	console.log("aww what the heck?") 
 else if (tip == "10%")

	console.log("thank you kid") 
 else if (tip == "30%") {

	console.log("Your much appreciated")
}










/* --------------------------------------------

Part 2:
Now that you have the costs of everything ordered, let's calculate the cost of each person's order(including tip and tax).

Write a function that will calculate the cost of each person's order, including:
- Cost of all of their ordered items
- Tax (Look up the sales tax of your city)
- Tip (Give the user the option to enter how much they want to tip)

Remember! Functions are meant to be reusable, so write a function that will work when called for each person!

-------------------------------------------- */












/* --------------------------------------------

Part 3:
Let's print out a receipt for each person.

Write a function that will take the values of each person's order and total cost and print it out in an appealing way.

The receipt should include:
- Cost of each item
- Total cost for each person

Remember! Functions are meant to be reusable, so write a function that will work when called for each person!

-------------------------------------------- */











/* --------------------------------------------

Part 4: Upchallenges!

How many of these upchallenges can you implement?

- Make sure the user is only entering numbers. If they enter an invalid value, prompt them to re-enter.
- The displayed prices should only have two decimal places.
- Can you adjust your program to account for any shared items ordered for the group?
- Display the tax and tip values
- Implement a rewards system (stamp cards, buy one get one, etc)

-------------------------------------------- */
