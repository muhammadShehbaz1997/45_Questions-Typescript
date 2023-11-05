/*
--------------------------------QUESTION NO 11----------------------------------
Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
*/

let names: string[] = [
  "Muhammmad Haris",
  "Abdullah Shafique",
  "Baber Azam",
  "Saad Ali Khan",
];
for (let list of names) {
  console.log(list);
}

/*
-----------------------------------QUESTION NO 12-----------------------------------
 Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
should be the same, but each message should be personalized with the person’s name.
*/

let names_Array: string[] = [
  "Kane Williamson",
  "Virat Koil",
  "Muhammad Hafiz",
  "Dryal Micheal",
];
for (let personalized of names_Array) {
  console.log(`${personalized} is a Classic Player`);
}

/*
----------------------------------QUESTION NO 13-------------------------------------
Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
*/

let myFovorite_vehicles: Array<[Model: string, Company: string]> = [];
myFovorite_vehicles.push(["Honda", "Moter Cycle"]);
myFovorite_vehicles.push(["TATA", "car"]),
  myFovorite_vehicles.push(["Honda", "125"]);

myFovorite_vehicles.forEach(([Model, Company]) => {
  console.log(`I would Like To Own A ${Model} ${Company}`);
});

/*
---------------------------------QUESTION NO 14------------------------------
 Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
*/

const Party: string[] = [
  "Abdullah Shafique",
  "Imam Ul Haq",
  "Baber Azam",
  "Muhammad Rizwan",
];
Party.forEach((People) => {
  console.log(`${People} You Are Inviting To Dinner Please Join Us.`);
});

/*
--------------------------------QUESTION NO 15--------------------------------------
 Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think of
someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the
end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with
the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still
in your list.
*/

const GuestList: string[] = [
  "Abdullah Shafique",
  "Imam Ul Haq",
  "Baber Azam",
  "Muhammad Rizwan",
];

let PeopleCanNotMakeIt: string = "Imam Ul Haq";
console.log(`For Some Reason ${PeopleCanNotMakeIt} Can Not Attend The Dinner.`);
console.log(`And Replacing The Name Fakher Zaman For Imam Ul Haq\n`);

const New_Guest: string = "Fakher Zaman";
let IndexOf: number = GuestList.indexOf(PeopleCanNotMakeIt);
if (IndexOf !== -1) {
  GuestList[IndexOf] = New_Guest;
}
GuestList.forEach((guest) => {
  console.log(`${guest} You Are Invite To The Party`);
});

/*
-------------------------------QUESTION NO 16 --------------------------
 More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.
*/

let guests: string[] = [
  "Abdullah Shafique",
  "Fakher Zaman",
  "Baber Azam",
  "Muhammad Rizwan",
];

for (let inform of guests) {
  console.log(`News!.. Dear ${inform} We Found A Big Dinner Table! `);
}

let newGuest_Beginning: string = "Saim Ayub";
let newGuest_Middle: string = "Imad Wasim";
let newGuest_End: string = "Muhammad Nawaz";
guests.unshift(newGuest_Beginning);
let indexMiddle = guests.length / 2;
guests.splice(indexMiddle, 0, newGuest_Middle);
guests.push(newGuest_End);
console.log(guests);
console.log("\n\tNew Set of Invitations");
guests.forEach((anyPeople) => {
  console.log(`${anyPeople} Please Join our Dinner Party`);
});

/*
---------------------------------QUESTION NO 17 -------------------------
 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
of your program.
// */

const new_Array17: string[] = [
  "Saim Ayub",
  "Abdullah Shafique",
  "Imad Wasim",
  "Fakher Zaman",
  "Baber Azam",
  "Muhammad Rizwan",
  "Muhammad Nawaz",
];

console.log("\n\tI Can Invite Only Two people");
while (new_Array17.length > 2) {
  let remove_Guest = new_Array17.pop();
  console.log(`Sorry!! ${remove_Guest} I Can't Invite To Dinner`);
}
for (let allow_Dinner of new_Array17) {
  console.log(`Dear ${allow_Dinner} You Are Still Invite To Dinner.`);
}

new_Array17.pop();
new_Array17.pop();

console.log(`Guest List After Dinner`, new_Array17);

/*
---------------------------QUERSTION NO 18-----------------------------------------
Seeing the World: Think of at least five places in the world you’d like to visit.

• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that itsorder has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/

let SeeingPlaces: string[] = [
  "Masjid e Nabwi",
  "Suchheri",
  "Balakot River",
  "Lughmani Hill",
];
console.log("\n_______________Original Array_______________\t");
console.log(SeeingPlaces);
console.log(
  "\t\n Array in alphabetical order without modifying the actual list."
);
console.log([...SeeingPlaces].sort());
console.log("\nShowing Array is still in its original order");
console.log(SeeingPlaces);
console.log("\nReverse The Order Of Array ");
console.log([...SeeingPlaces].sort().reverse());
console.log("\nOrignal Array Order");
console.log(SeeingPlaces);
console.log("\nArray Store In Alphabetical Order");
SeeingPlaces.sort();
console.log(SeeingPlaces);
console.log("\nchange your array so it’s stored in reverse alphabetical order");

SeeingPlaces.sort().reverse();
console.log(SeeingPlaces);

/*
-----------------------------QUESTION NO 19 -----------------------------
 Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
of people you are inviting to dinner.
*/

console.log(
  `\nprint a message indicating the numberof people you are inviting to dinner.`
);
console.log(
  `We Have Finally Invited ${GuestList.length} Guest In Dinner Party`
);

/*
-----------------------------QUESTION NO 20 ----------------------------
Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything
else you’d like. Write a program that creates a list containing these items.
*/

const Favorite_Places: string[] = [
  "Lughmani Hill",
  "Shimla Hill",
  "Suchheri Hills",
  "Balakot",
];
console.log("List Of Pakistan Famous Hills");
for (let repeat of Favorite_Places) {
  console.log(repeat);
}
