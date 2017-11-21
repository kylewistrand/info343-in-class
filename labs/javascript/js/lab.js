// Put your JavaScript lab code here!
// @ts-check
"use strict";

let x = "I like JavaScript more than I like to party.";

console.log(x.slice(28, 44));

let school = "I love Washington State Unviersity";

school = school.replace("Washington State Unviersity", "The University of Washington");

console.log(school);

let combined = x.concat(school);

console.log(combined);


//Functions
function sumUpTo(n) {
    let sum = 0;
    for (let i = n; i > 0; i--) {
        sum += i;
    }
    return sum;
}

console.log(sumUpTo(5));

function vowelCount(word) {
    let numOfVowels = 0;
    let vowels = ["a", "e", "i", "o", "u"];
    word = word.toLowerCase();
    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (word[i] == vowels[j]) {
                numOfVowels++;
            }
        }
    }
    return numOfVowels;
}

console.log(vowelCount("Kyle Wistrand"));

// Objects
let books = [
    {
        title: "Harry Potter and the Goblet of Fire",
        author: "J.K. Rowling",
        read: true
    },
    {
        title: "The Great Gastby",
        author: "F. Scott Fitzgerald",
        read: false
    },
    {
        title: "The Hunger Games",
        author: "Suzanne Collins",
        read: false
    },
];

books.push({
    title: "1984",
    author: "George Orwell",
    read: true
});

function bookStatus(books) {
    for (let )
}