// //Unions and unions literal practice

// Union literals for operation type (streng)
type Operation = "add" | "divide" | "multiply" | "subtract";

// Funktion der udfører en udregning baseret på operationstype
function calculate(num1: number, num2: number, operation: Operation): number {
// Switch for at vælge den passende udregning baseret på operationstypen
  switch (operation) {
    case "add":
      return num1 + num2;
    case "divide":
      return num1 / num2;
    case "multiply":
      return num1 * num2;
    case "subtract":
      return num1 - num2;
    default:
      throw new Error("Ugyldig operationstype");
  }
}

// Test af funktionen med forskellige operationstyper og udskrivning til terminalen
console.log("Addition:", calculate(5, 3, "add"));       // Output: 8
console.log("Division:", calculate(10, 2, "divide"));   // Output: 5
console.log("Multiplication:", calculate(4, 6, "multiply"));  // Output: 24
console.log("Subtraction:", calculate(7, 2, "subtract"));  // Output: 5

  


