/*
----------------------------QUESTION NO 21 ------------------------
 They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
 */

let object = {
    name : "Shehbaz",
    father_name : "Niazi",
    email : "niazi2222@gmail.com",
};

class My_Object {
    name : string;
    father_name : string;
    email : string;

    constructor (name :string, father_name : string, email: string){
        this.name = name;
        this.father_name = father_name;
        this.email = email;
    }
};

let total = new My_Object ("Muhammad Ibrar", "Muhammad Dildar", "SaadAli1998@gmail.com")
console.log(total);

/*
-------------------------------QUESTION NO 22 ----------------------------------
Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs
to produce an index error. Make sure you correct the error before closing the program.
*/

let myIndex: number[] = [1,2,3,4,5,6,7]
const error_index = myIndex[10]

if(error_index !== undefined){
  console.log(`Index Error: ${error_index}`);

}else {
console.log(`index 10 is out of bounds`);
}

/*
---------------------------------QUESTION NO 23 -------------------
 Conditional Tests: Write a series of conditional tests. Print a statement
describing each test and your prediction for the results of each test. Your code
should look something like this:

let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
*/

let car = "Toyota";
console.log("Is Car == 'Toyota'? I Predicate True.");
console.log(car == "Toyota");

let Bike = "Honda";
console.log("Is Bike == 'honda'? I Predicate False.");
console.log(Bike == "honda");

let myNumber = 20;
console.log("Is myNumber == '20'? I Predicate True.");
console.log(myNumber == 20);

var number = 20
console.log(("Is Number == '28'? I Predicate False."));
console.log(number == 28);

let name  = "Shehbaz";
console.log(("Is Name == 'Shehbaz'? I Predicate True."));
console.log(name == "Shehbaz");

let upperName = "shehbaz"
console.log(`Is Name == 'Shehbaz'? I Predicate False.`);
console.log(upperName == "shehbaz".toUpperCase());

let no = 10
console.log("Is Name == '19 > no'? I Predicate True.");
console.log(19 > 10);

let name1 = "KHAN"
console.log("Is Name == 'KHAN'? I Predicate False.");
console.log(name == "KHAN".toLowerCase());

let type = true
console.log("Is type == 'true'? I Predicate Ture");
console.log(type == true);

let mynam2 = "shehbaz"
console.log( "Is mynam2 == 'shehbaz'? I Predicate Ture");

if("Shehbaz" == mynam2){
  console.log(true);
}else{
  console.log(false);

}

/*
------------------------------------QUESTION NO 24 ------------------------
 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array
*/

let myString = "Pakistan"
console.log("\n\tTests for equality and inequality with strings");
console.log(myString == "Pakistan");
console.log(myString!= "Pakistan");

console.log("\n\tTests using the lower case function");
console.log(myString.toLowerCase() == "Pakistan");
console.log(myString.toLowerCase() != "Pakistan");

var number = 5
console.log("\n\tNumerical tests involving equality and inequality");
console.log(number == 5);
console.log(number != 5);
console.log(number < 2);
console.log(number > 3);
console.log(number >= 5);
console.log(number <= 2);

console.log('\n\tTests using "and" and "or" operators');
console.log(number > 5 || number <= 5);
console.log(number > 5 && number <= 5);

console.log("Test whether an item is in a array");
let array = ["\n\tShehbaz", "Osama", "Umer Aftab"]
console.log(array.includes("Osama"));

console.log("\t\nTest whether an item is not in a array");
console.log(array.includes("Khan"));

/*
---------------------------------------QUESTION NO 25 --------------------------------
Alien Colors #1: Imagine an alien was just shot down in a game. Create a
variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

• Write an if statement to test whether the alien’s color is green. If it is, print
a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that
fails. (The version that fails will have no output.)
*/

let alian_color  = "Green"
if(alian_color === "Green"){
  console.log("Player Earned 5 Points");
}
let alienColor = "Red"
if(alienColor === "Green"){
  console.log(" ");

}
/*
-----------------------------QUESTION NO 26 ----------------------------
Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
write an if-else chain.

• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else block.
*/

let alian_color1 = "Green"
if(alian_color1 === "Green"){
  console.log("player just earned 5 points for shooting the alien.");
}else{
  console.log("player just earned 10 points.");

}
// versoin  2

let aliancolor1 = "Red"
if(aliancolor1 === "Green"){
  console.log("player just earned 5 points for shooting the alien.");
}else{
  console.log("player just earned 10 points.");

}

/*
-------------------------------QUESTION NO 27 -----------------------------
 Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color alien.
*/

let alien_colour = "green";
if (alien_colour === "green") console.log("player earned 5 points.");
else if (alien_colour === "red") console.log("player earned 10 points.");
else if (alien_colour === "yellow") console.log("player earned 15 points.");

//                         VERSION 2

let alien_Colour = "red";
if (alien_Colour === "green") console.log("player earned 5 points.");
else if (alien_Colour === "red") console.log("player earned 10 points.");
else if (alien_Colour === "yellow") console.log("player earned 15 points.");

//                         VRESION 3

let Alien_colour = "yellow";
if (Alien_colour === "green") console.log("player earned 5 points.");
else if (Alien_colour === "red") console.log("player earned 10 points.");
else if (Alien_colour === "yellow") console.log("player earned 15 points.");

/*
-----------------------------QUESTION NO 28 -------------------------------------
 Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

• If the person is less than 2 years old, print a message that the person is a baby.
• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
• If the person is at least 4 years old but less than 13, print a message that the person is a kid
• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
• If the person is age 65 or older, print a message that the person is an elder.
*/

let person: number = 65;
if (person < 2) console.log("Person Is Baby");
else if (person >= 2 && person < 4) console.log("person is a toddler.");
else if (person >= 4 && person < 13) console.log("person is a toddler.");
else if (person >= 13 && person < 4) console.log("person is a toddler.");
else if (person >= 20 && person < 65) console.log("person is a adult.");
else if (person >= 65) console.log("person is a elder.");

/*
--------------------------------QUESTION NO 29 --------------------------------
Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
such as You really like bananas!
*/

let favotite_fruite: string[] = ["Apple", "Banana", "Cheery", "Grapes"];
console.log(favotite_fruite);

if (favotite_fruite.includes("Banana")) console.log("You really like bananas!");
if (favotite_fruite.includes("Apple")) console.log("You really like Apple!");
if (favotite_fruite.includes("Cheery")) console.log("You really like Cheery!");
if (favotite_fruite.includes("Grapes")) console.log("You really like Grapes!");

/*
-------------------------------QUESTION NO 30 -------------------------------
 Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user
after they log in to a website. Loop through the array, and print a greeting to each user:

• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
*/

let user_names: string[] = ["Admin", "Umer Aftab Bhai", "Osama", "Saad Ali"];
for (let user of user_names) {
  if (user === "Admin") {
    console.log(`Hello ${user}, would you like to see a status report?`);
    break;
  } else {
    console.log(`Hello ${user}, thank you for logging in again.`);
  }
}
