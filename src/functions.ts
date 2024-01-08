//Function practise in TS

// 1: Funktion til at udregne procenten af et tal
function calculatePercentage(inputNumber: number, percentage: number): number {
    return (inputNumber * percentage) / 100;
}

// Eksempeldata for at teste funktionen til at udregne procent
const numberToCalculate = 200;
const percentageToCalculate = 25;
const result = calculatePercentage(numberToCalculate, percentageToCalculate);
console.log(`Resultatet af at udregne ${percentageToCalculate}% af ${numberToCalculate} er: ${result}`);

// 2: Funktion til at hente et specifikt element i et array
function getElementAtIndex(inputArray: any[], index: number): any {
    if (index >= 0 && index < inputArray.length) {
        return inputArray[index];
    } else {
        console.error("Index out of bounds");
    }
}

// Eksempeldata for at teste funktionen til at hente et specifikt element i et array
const arrayToSearch = ["apple", "banana", "cherry", "date"];
const indexToRetrieve = 2;
const elementAtIndex = getElementAtIndex(arrayToSearch, indexToRetrieve);
console.log(`Elementet på index ${indexToRetrieve} er: ${elementAtIndex}`);

// 3: Funktion til at søge igennem et array for en specifik tekststreng
function searchArrayForText(inputArray: string[], searchText: string): string | undefined {
    const foundElement = inputArray.find(element => element.includes(searchText));
    return foundElement;
}
// Eksempeldata for at teste funktionen i at søge igennem et array for en specifik tekststreng
const searchString = "ban";
const foundElement = searchArrayForText(arrayToSearch, searchString);
console.log(`Elementet indeholdende "${searchString}" er: ${foundElement}`);
