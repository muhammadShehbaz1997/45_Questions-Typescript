/*
Install [Node.js](https://nodejs.org/en/), [TypeScript](https://www.typescriptlang.org/download)  and [VS Code](https://code.visualstudio.com/) on your computer.
*/

console.log("\t\n-----==Yes Environment IS Ready----")

/*
----------------------------------QUESTION NO 2------------------------------- 
. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric,
would you like to learn some Python today?”
*/

const person_name : string = "Hello Eric"
console.log(`${person_name}, would you like to learn some python today?`);

/*
------------------------------------QUESTION NO 3-----------------------------------
 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
 */

 let variable_name: string = "Joprah Archer";
 console.log(variable_name.toUpperCase());
 console.log(variable_name.toLowerCase());
 console.log(variable_name.split(" "));
 

 /*
 ----------------------------------QUESTION NO 4---------------------------------
  Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the
  Albert Einstein once said, “A person who never made a mistake never tried anything new.”
following, including the quotation marks:
*/

console.log(`Albert Einstein once said, A person who never made a mistake never tried anything new`);

/*
-----------------------------------QUESTION NO 5--------------------------------------
 Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
*/

let famous_person : string = "Albert Einstein";
let message : string = `${famous_person}once said, A person who never made a mistake never tried anythig new`
console.log(message);

/*
------------------------------- QUESTION NO 6 ---------------------------------------
Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
*/

let name : string = "\t\n Shehbaz Khan Niazi"
console.log(name);
console.log(name.trim());

/*
---------------------------------QUESTION NO 7------------------------------------------
Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results. 
*/

console.log(3 + 5);
console.log(100 - 92);
console.log(64 / 8);
console.log(4 * 2);

/*
--------------------------------  QUESTION NO 8 -----------------------------
 You should create four lines that look like this:
_____________________________________________
console.log(5 + 3)
_____________________________________________
Your output should simply be four lines with the number 8 appearing once on each line.
*/

console.log("__".repeat(20));
console.log(5 + 3);
console.log("__".repeat(20));
console.log(5 + 3);
console.log("__".repeat(20));
console.log(5 + 3);
console.log("__".repeat(20));
console.log(5 + 3);

/*
--------------------------QUESTION NO 10----------------------------
Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
*/

let favoriteNumber : number = 9
let message1 : string = `My Fovorite Number Is: ${favoriteNumber}`
console.log(message1);



