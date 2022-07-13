'use strict'

console.log('hello');

let userName = prompt("Hello! What is your name?");
alert("Welcome, "+userName+"!")

let food = prompt("Would you consider yourself a foodie? Y/N").toLowerCase();
if (food === "yes" || food === "y"){
    alert("Oh, me too!");
} else if (food === "no" || food === "n"){
    alert("You're missing out!");
} else{
    alert("That's not an acceptable answer");
}
console.log("Would you consider yourself a foodie? "+food);

let pnw = prompt("Don't you love the PNW? Y/N").toLowerCase();
if (pnw === "yes" || pnw === "y"){
    alert("Oh, me too!");
} else if (pnw === "no" || pnw === "n"){
    alert("You're missing out!");
} else{
    alert("That's not an acceptable answer");
}
console.log("Don't you love the PNW? "+pnw);

let poison = prompt("Onions have no place in this world? Y or Yes").toLowerCase();
if (poison === "yes" || poison=== "y"){
    alert("Good. You have some common sense.");
} else if (poison === "no" || poison === "n"){
    alert("We're not compatable...");
} else{
    alert("I didn't get that, so I assume you agree");
}
console.log("Onions have no place in this world? "+ poison);