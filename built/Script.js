"use strict";
let firstName = "kasper";
let age = 22;
let isWideScreen = false;
let todaysDate = new Date();
let nullValue = null;
let undefinedValue = undefined;
let arrayOfNames = ['Elise', 'Per'];
let arrayOfAge = [12, 33, 33];
//To måder at definere arrays
let arrayOfLastname = ['Elise', 'Per'];
arrayOfLastname.push();
let nestedArray = [['elise', 'per'], ['']];
//tester
let arrayOfStrings = ["Hello", "World"];
let arrayOfnumbers = [1, 2, 3];
arrayOfnumbers.push(4);
let mixedArray = ["Hello", "World", 33, 82];
//Ny tester om objekter - coffeemachine
let coffeeMachine = {
    max_ml: 1000,
    name: "SuperMaker",
    brand: "Mellisa",
    func: () => { console.log("Making covfefe"); }
};
coffeeMachine.func();
function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}
//Ovelse lav et objekt i TS
let personObject = {
    firstname: "Mathias",
    lastname: "Larsen",
    age: 32,
    haircolors: ["blond", "red"],
    height: 1.80,
    func: () => { console.log("Living"); }
};
personObject.height;
let user = {
    age: 14,
    name: "Mario",
    Address: "Streename 122"
};
//   let isAllowed: boolean = false
//Function i TS
function veriFyAge(user) {
    if (user.age >= 18) {
        return user.name + "is allowed";
    }
    else {
        return user.name + "is not allowed";
    }
}
veriFyAge(user);
//inputs in TS
// hent vores input field
let textInput = document.getElementById("textInputField");
// tilføj en event listener med en anonym funktion der sender eventet med ind
textInput === null || textInput === void 0 ? void 0 : textInput.addEventListener("click", (event) => {
    event.preventDefault();
    let value = event.target;
    console.log(value);
});
let person = { firstname: "Peter", lastname: "Parker" };
function getDogAge(dog) {
    return dog.age;
}
let results = [
    {
        image_link: "https://api-ninjas.com/images/dogs/golden_retriever.jpg",
        good_with_children: 5,
        good_with_other_dogs: 5,
        shedding: 4,
        grooming: 2,
        drooling: 2,
        coat_length: 1,
        good_with_strangers: 5,
        playfulness: 4,
        protectiveness: 3,
        trainability: 5,
        energy: 3,
        barking: 1,
        min_life_expectancy: 10,
        max_life_expectancy: 12,
        max_height_male: 24,
        max_height_female: 24,
        max_weight_male: 75,
        max_weight_female: 65,
        min_height_male: 23,
        min_height_female: 23,
        min_weight_male: 65,
        min_weight_female: 55,
        name: "Golden Retriever"
    }
];
const isDogGoodToChildren = (dog) => {
    if (dog.age > 3) {
        return 'its good with chidlren';
    }
};
//Teste med et API
const getDogs = () => {
    let url = "";
    fetch(url).then(res => res.json()).then(data => console.log(data));
};
getDogs();
// console.log(firstName);
console.log('hello my first name is: ', firstName, ' and I am ', age, 'old');
