'use strict'

console.log('hello');

let userName = prompt("Hello! What is your name?");
// console.log("Welcome, "+userName+"! My name is Jordan Yamada.");
alert("Welcome, "+userName+"! My name is Jordan Yamada.");
alert("I was born in Portland, Oregon, but I grew up in Saipan, a small island in the Pacific.");
alert("I live in the Seattle area now, and I much prefer the weather out here. I do enjoy the grey, overcast skies and the gloomy, rainy days.");
alert("I'm not a thrill-seeker, but I'll try almost anything once. I've ridden a bull, a camel, and even a shark, but I've never been on a horse.")
alert("I have a strong hatred for onions, and a bad addiction to all things pumpkin-spiced.")

let counter = 0;
// let answer = "wrong";

function rainyQ(){
let rain = prompt("Do I like the rain? Y/N").toLowerCase();
// console.log("Do I like the rain? Y/N");
if (rain === "yes" || rain === "y"){
    alert("You got it right!");
    // console.log("You got it right!");
    counter++;
} else if (rain === "no" || rain === "n"){
    alert("You missed that one!");    
} else{
    alert("That answer didn't count.");
}
}
//rainyQ();

function saipanQ(){
let saipan = prompt("Did I grow up in the East Coast Y/N").toLowerCase();
// console.log("Did I grow up in the East Coast Y/N");
if (saipan === "yes" || saipan === "y"){
    alert("You missed that one!");
} else if (saipan === "no" || saipan === "n"){
    alert("You got it right!");
    // console.log("You got it right!");
    counter++;
} else{
    alert("That's not an acceptable answer");
}
}
//saipanQ();

function seattleQ(){
let seattle = prompt("Was I born in Seattle? Y/N").toLowerCase();
// console.log("Was I born in Seattle? Y/N");
if (seattle === "yes" || seattle === "y"){
    alert("You missed that one!");
} else if (seattle === "no" || seattle === "n"){
    alert("You got it right!");
    counter++;
} else{
    alert("That's not an acceptable answer");
}
console.log(`You got this question ${answer}!`);
}
//seattleQ();

function poisonQ(){
let poison = prompt("Onions have no place in this world! Y or Yes").toLowerCase();
// console.log("Onions have no place in this world! Y or Yes");
if (poison === "yes" || poison=== "y"){
    alert("Okay. That was a freebie.");
    // console.log("Okay. That was a freebie.");
    counter++;
} else if (poison === "no" || poison === "n"){
    alert("You got that wrong. We're not compatable");
} else{
    alert("I didn't get that answer");
}
}
//poisonQ();

function pumpkinQ(){
let pumpkin = prompt("I hate all things pumpkin-spice... Y/N?").toLowerCase();
console.log("I hate all things pumpkin-spice... Y/N?");
if (pumpkin === "yes" || pumpkin=== "y"){
    alert("Wrong! I can't get enough of the stuff...");
} else if (pumpkin === "no" || pumpkin === "n"){
    alert("Right! I can't get enough of the stuff.");
    // console.log("Right! I can't get enough of the stuff.");
    counter++;
} else{
    alert("Sorry, I can't accept that answer.");
}
}
//pumpkinQ();

function animalsQ(){
let chances =  4
let animals = 4

for (let i = chances; i > 0; i--){
    let guess1 = parseInt(prompt("How many animals have I mentioned?"));
    // console.log("How many animals have I mentioned?");
     if (guess1 === animals){
        alert("Hey! You got it right!");
        // console.log("Hey! You got it right!");
        counter++;
        i=0;
    }   else if (guess1 > animals){
//            alert(`Your guess was too high. You have ${i-1} chances left.`);
            if (i === 1){
                alert("Sorry. You're out of chances. The answer was 4.");
            }   else{
                alert(`Your guess was too high. You have ${i-1} chances left.`);
            }
    }   else if (guess1 < animals){
//            alert(`Your guess was too low. You have ${i-1} chances left.`);
            if (i === 1){
                alert("Sorry. You're out of chances. The answer was 4.");
            }   else{
                alert(`Your guess was too low. You have ${i-1} chances left.`);
            }
    }   else {
 //           alert(`Sorry. I couldn't take that answer, but you still used a guess. You have ${i-1} chances left.`);
            if (i === 1){
                alert("Sorry. You're out of chances. The answer was 4.");
            }   else {
                alert(`Sorry. I couldn't take that answer, but you still used a guess. You have ${i-1} chances left.`);
            }
    }

}
}
//animalsQ();

function animalsQ2(){

    let animals2 = ['bull','camel','horse','shark'];
    let chances2 = 7
    while (chances2){
        let guess2 = prompt("Can you name one of the animals I mentioned earlier?").toLowerCase();
        // console.log("Can you name one of the animals I mentioned earlier?");
        chances2--;
        if (chances2 === 0){
            alert("Sorry. You're all out of guesses. The answers were camel, bull, horse and shark.");
        }   else if (guess2 === animals2[0] || guess2 === animals2[1] || guess2 === animals2[2] || guess2 === animals2[3]){
            alert("Hey, you got one right.");
            // console.log("Hey, you got one right.");
            counter++;
          chances2 = 0;
        }   else {
            alert(`Sorry. Your answer was wrong. Try again. you have ${chances2} guesses left.`)
        }
    
    }
}
//animalsQ2();

function quizMe(){
    let text = "Would you like to take a quiz about me? Y/N";
    if (confirm(text) == true) {
        alert("Great. I'll ask you 7 questions. Let's start with question 1.");
        rainyQ();
        saipanQ();
        seattleQ();
        poisonQ();
        pumpkinQ();
        animalsQ();
        animalsQ2();
        alert(`You got ${counter}/7 questions right.`);
        // console.log(`You got ${counter}/7 questions right.`);
        alert(`Thank you for playing along, ${userName}. Welcome to my page.`);
        // console.log(`Thank you for playing along, ${userName}. Welcome to my page.`);
      } 
      else {
        text = `That's alright. Welcome to my page, ${userName}.`;
        alert(text);
      }
}

quizMe();

//alert(`You got ${counter}/7 questions right.`);