/*
---------------------------QUESTION NO 31 --------------------------
 No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.
*/

let users: string[] = ["Admin", "Shehbaz", "Aftab Bhai"];
users.splice(0);
if (users.length <= 0) {
  console.log("We need to find some users!");
}

for (let user of users) {
  if (user === "Admin") {
    console.log(`Hello ${user}, would you like to see a status report?`);
    break;
  } else {
    console.log(`Hello ${user}, thank you for logging in again.`);
  }
}

/*
---------------------------------QUESTION NO 32 -----------------------------
 Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a      message that the person will need to enter anew username. If a username has not been used, print a message saying that the username is available.
*/

let current_users: string[] = ["Shehbaz", "Kamran", "Aftab Bhai", "Osama"];
let new_users: string[] = ["Abdul Hadi", "Shehbaz", "Saad Ali", "Osama"];

function existing(name: string): boolean {
  return current_users.some(
    (value) => value.toLowerCase() === name.toLowerCase()
  );
}
for (let UserName of new_users) {
  if (existing(UserName)) {
    console.log(
      `Sorry, the username ${UserName} is already taken. Please choose a different one.`
    );
  } else {
    console.log(`The username '${UserName}' is available.`);
  }
}

/*
--------------------------------QUESTION NO 33 ---------------------------
Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

• Store the numbers 1 through 9 in a array.
• Loop through the array.
• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th
7th 8th 9th", and each result should be on a separate line.
*/

let numbers: number[] = [1,2,3,4,5,6,7,8,9,10]
for(let no of numbers) {
    if(no === 1) {
        console.log("1st");
    }else if(no === 2) {
        console.log("2nd");
    }else if(no === 3) {
        console.log("3rd");
    }else{
        console.log(no + "th");
    }
}

/*
------------------------------QUESTION NO 34 -----------------------
 Pizzas: Think of at least three kinds of your favorite pizza. Store these
pizza names in a array, and then use a for loop to print the name of each pizza.

• Modify your for loop to print a sentence using the name of the pizza
instead of printing just the name of the pizza. For each pizza you should
have one line of output containing a simple statement like I like pepperoni
pizza.

• Add a line at the end of your program, outside the for loop, that states
how much you like pizza. The output should consist of three or more lines
about the kinds of pizza you like and then an additional sentence, such as
I really love pizza!
*/

let favorite_Pizza: string[] = ["Hawaiian Pizza", "Meat Pizza", "Margherita Pizza"]
for(let loop of favorite_Pizza){
    console.log(loop);    
};
for(let loop of favorite_Pizza){
    console.log("I Really like" + loop);
};
console.log(`I eat Hawaiian boti pizza every day i also like Meat flavor of pizza as well.I really love pizza!`);


/*
-----------------------------------------QUESTION NO 35 --------------------------
 Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to
print out the name of each animal.
• Modify your program to print a statement about each animal, such as
A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in
common. You could print a sentence such as Any of these animals would
make a great pet!
*/

let animals: string[] = ["Hippopotamus", "Giraffe", "Wild Boar"]
for(let loops of animals) {
    console.log(loops);   
}
for(let loops of animals) {
    console.log(`${loops} is Wild Animal`);
}
console.log("All of Them Are Wild Animals");

/*
-----------------------------------QUESTION NO 36 ----------------------
T-Shirt: Write a function called make_shirt() that accepts a size and the
text of a message that should be printed on the shirt. The function should print
a sentence summarizing the size of the shirt and the message printed on it.
Call the function.
*/

let make_shirt = (size: number, text: string) => {
    console.log(`This is a kids shirt and the shirt size is ${size}m And ${text} printed on his shirt`);
}
make_shirt(10, "Pakistan Zindabad")

/*
----------------------------------QUESTION NO 37 -----------------------
 Large Shirts: Modify the make_shirt() function so that shirts are large
by default with a message that reads I love TypeScript. Make a large shirt and a
medium shirt with the default message, and a shirt of any size with a different
message.
*/

function make_shirt1 (size: string = "Large",text: string = "I Love Typescript",  ){
    console.log(`Size of the shirt is ${size} and the message printed on the shirt is ${text}.`);   
};

make_shirt1()
make_shirt1("Small", "I love Pakistan")
make_shirt1("Medium")

/*
--------------------------QUESTION NO 38 ------------------------------------
Cities: Write a function called describe_city() that accepts the name of
a city and its country. The function should print a simple sentence, such as
Karachi is in Pakistan. Give the parameter for the country a default value.
Call your function for three different cities, at least one of which is not in the
default country.
*/

function describe_city (name: string, text: string = "Pakistan"){
    console.log(`${name} is in ${text}`);
}
describe_city("Lahore")
describe_city("Islamabad")
describe_city("Washington", "USA");

/*
-----------------------------QUESTION NO 39 ------------------------
 City Names: Write a function called city_country() that takes in the name
of a city and its country. The function should return a string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value
that’s returned.
*/

let city_country = (name: string, country: string) => {
    console.log(`${name}, ${country}`);
}
city_country("karachi", "Pakistan")
city_country("Lahore", "Pakistan")
city_country("Kolkata", "India")

/*
---------------------------------------QUESTION NO 40 ----------------------
Album: Write a function called make_album() that builds a Object
describing a music album. The function should take in an artist name and an
album title, and it should return a Object containing these two pieces of
information. Use the function to make three dictionaries representing different
albums. Print each return value to show that Objects are storing the
album information correctly.
Add an optional parameter to make_album() that allows you to store the
number of tracks on an album. If the calling line includes a value for the number
of tracks, add that value to the album’s Object. Make at least one new
function call that includes the number of tracks on an album.
*/

let  make_album = (name: string, title: string, track?: number ) => {
    return{
        name: name,
        title : title,
        track : track ?? 0
    }
}
console.log(make_album("Atif Aslam", "Tajdare Haram"));
console.log(make_album("Sahir Ali Baggah", "Pakistan Zindabad"));
console.log(make_album("Amina Baig", "Pyar Hua tha", 8));

