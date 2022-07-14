'use strict'

console.log('hello');

let userName = prompt("Hello! What is your name?");
alert("Welcome, "+userName+"! My name is Jordan Yamada.");
alert("I was born in Portland, Oregon, but I grew up in Saipan, a small island in the Pacific");
alert("I live in the Seattle area now, and I much prefer the weather out here. I do enjoy the grey, overcast skies and the gloomy, rainy days.");
alert("I'm not a thrill-seeker, but I'll try almost anything once. I've ridden a bull, a camel, and even a shark, but I've never been on a horse.")
alert("I have a strong hatred for onions, and a bad addiction to all things pumpkin-spiced.")
let counter = 0;
let answer = "wrong";
let rain = prompt("Do I like the rain? Y/N").toLowerCase();
if (rain === "yes" || rain === "y"){
    alert("You got it right!");
    counter++;
} else if (rain === "no" || rain === "n"){
    alert("You missed that one!");
} else{
    alert("That answer didn't count.");
}
console.log(`You got this question ${answer}!`);

let saipan = prompt("Did I grow up in the East Coast Y/N").toLowerCase();
if (saipan === "yes" || saipan === "y"){
    alert("You missed that one!");
} else if (saipan === "no" || saipan === "n"){
    alert("You got it right!");
    counter++;
} else{
    alert("That's not an acceptable answer");
}
console.log(`You got this question ${answer}!`);

let seattle = prompt("Was I born in Seattle? Y/N").toLowerCase();
if (seattle === "yes" || seattle === "y"){
    alert("You missed that one!");
} else if (seattle === "no" || seattle === "n"){
    alert("You got it right!");
    counter++;
} else{
    alert("That's not an acceptable answer");
}
console.log(`You got this question ${answer}!`);

let poison = prompt("Onions have no place in this world! Y or Yes").toLowerCase();
if (poison === "yes" || poison=== "y"){
    alert("Okay. That was a freebie.");
} else if (poison === "no" || poison === "n"){
    alert("You got that wrong. We're not compatable");
} else{
    alert("I didn't get that answer");
}
console.log(`You got this question ${answer}!`);

let pumpkin = prompt("I hate all things pumpkin-spice... Y/N?").toLowerCase();
if (pumpkin === "yes" || pumpkin=== "y"){
    alert("Wrong! I can't get enough of the stuff...");
} else if (pumpkin === "no" || pumpkin === "n"){
    alert("Right! I can't get enough of the stuff.");
    counter++;
} else{
    alert("Sorry, I can't accept that answer.");
}
console.log(`You got this question ${answer}!`);

let chances =  4
let animals = "4"

for (let i = chances; i > 0; i--){
    let guess1 = prompt("How many animals have I mentioned?");
    if (guess1 === animals){
        alert("Hey! You got it right!");
        counter++;
        break;
    }   else if (guess1 > animals){
            alert(`Your guess was too high. You have ${i-1} chances left`);
    }   else if (guess1 < animals){
            alert(`Your guess was too low. You have ${i-1} chances left`);
    }   else {
            alert(`Sorry. I couldn't take that answer, but you still used a guess. You have ${i-1} chances left`);
    }

}

alert(`You got ${counter}/7 questions right.`);