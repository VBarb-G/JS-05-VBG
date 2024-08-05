/* 1: Write a program that prompts a user for their data: username, age, and a list of their favorite movies. Store the information and then showcase it in the console. Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'*/

let nombre = prompt ("Enter your Name");
console.log("Hola," + nombre + "!");
let age = parseInt(prompt("How old are you?"));
console.log("You are " + age + " years old.");
let favoriteMovies = prompt("Mention your top 3 favorite movies");
let array = favoriteMovies.split(",");
for (let i = 0; i < array.length; i++) { 
    console.log("The film " + array[i] + " is one of my favorites.");
}

/* 2: Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.*/

let numbers = prompt("Please enter a list of numbers");
parseInt(numbers);
let arrayNumbers = numbers.split(",").map(Number);
let max = arrayNumbers[0];
for (let i = 1; i < arrayNumbers.length; i++) { 
    if (arrayNumbers[i] > max) {  
        max = arrayNumbers[i];  }
        }
console.log("The highest number is: " + max);


//3: Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.

const alarm = prompt ("Please type in how many seconds you would like to set your alarm");
const text = prompt ("Please type the message to display along with the alarm");
let seconds = parseInt(alarm);
function turnOn() {
    console.log(`Alarm: ${text}`);
}
console.log("Waiting info");
setTimeout(function() { 
alert("Alarm triggered: " + text);
}, seconds *1000);

//4: Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.

const word = prompt ("Please type any word you want");
function palindrome(word) { 
    let cleanWord = word.replace(/[^a-zA-Z0-9]/g, "").toLowerCase(); let reversedWord = cleanWord.split("").reverse().join("");
 if (cleanWord === reversedWord) { 
    console.log(`${word} is a palindrome.`); 
} else { 
    console.log(`${word} is not a palindrome.`); 
}
}
palindrome(word);

//5: Write a program that prompts for an intenger number n. Where 1 <= n. Solve this using recursion.

const input = prompt("Please enter a number greater-than or equal to 1");
const n = parseInt(input);
function factorial (n) { 
    if (n === 1 || n === 0) { 
        return 1; 
    } else { 
        return n * factorial(n - 1); }
    }if (n >= 1) { 
        const result = factorial (n); 
        console.log(`The factorial of ${n} is ${result}`); 
    } else {  
        console.log("Please enter a valid integer number where 1<= n."); 
    }
//6: Write a program that takes the following nested matrix and flattens it (makes it a 1D array). Use any type of algorithm you want like callbacks, recursion, etc...
//const matrix = 