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
