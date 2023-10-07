/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays

let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];
let [john, mary, joe] = ages;
console.log(john, mary, joe);

// Destructuring objects

let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant"
};
let { mike, jill, alicia } = jobs;

console.log(mike, jill, alicia);

// Destructuring subsets

let languages = ["english", "french", "spanish", "german", "japanese"]
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

//commas are used to skip array items. See example:
let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    fourthLanguage: "japanese"
};

let { firstLanguage, thirdLanguage } = languages2;
console.log(firstLanguage, thirdLanguage);


// Using rest parameter syntax

let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favourite, secondfavourite, ...rest] = fruits;
console.log(favourite);
console.log(secondfavourite);
console.log(rest);

let favouriteFoods = {
    brian:"pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak",
};

let {brian, anna, ...others} = favouriteFoods;
console.log(brian);
console.log(anna);
console.log(others);


