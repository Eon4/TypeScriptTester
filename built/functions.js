"use strict";
//Function practise in TS
// Funktion til at udregne procenten af et tal
function calculatePercentage(inputNumber, percentage) {
    return (inputNumber * percentage) / 100;
}
// Funktion til at hente et specifikt element i et array
function getElementAtIndex(inputArray, index) {
    if (index >= 0 && index < inputArray.length) {
        return inputArray[index];
    }
    else {
        console.error("Index out of bounds");
    }
}
// Funktion til at søge igennem et array for en specifik tekststreng
function searchArrayForText(inputArray, searchText) {
    const foundElement = inputArray.find(element => element.includes(searchText));
    return foundElement;
}
// Eksempeldata for at teste funktionerne
const numberToCalculate = 200;
const percentageToCalculate = 25;
const result = calculatePercentage(numberToCalculate, percentageToCalculate);
console.log(`Resultatet af at udregne ${percentageToCalculate}% af ${numberToCalculate} er: ${result}`);
const arrayToSearch = ["apple", "banana", "cherry", "date"];
const indexToRetrieve = 2;
const elementAtIndex = getElementAtIndex(arrayToSearch, indexToRetrieve);
console.log(`Elementet på index ${indexToRetrieve} er: ${elementAtIndex}`);
const searchString = "ban";
const foundElement = searchArrayForText(arrayToSearch, searchString);
console.log(`Elementet indeholdende "${searchString}" er: ${foundElement}`);
