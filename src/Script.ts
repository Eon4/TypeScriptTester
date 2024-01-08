let firstName = "kasper";
let age: number = 22;
let isWideScreen: boolean = false; 
let todaysDate: Date = new Date ();
let nullValue: null = null;
let undefinedValue: undefined = undefined;

let arrayOfNames: string[] = ['Elise', 'Per']
let arrayOfAge: number[] = [12,33,33] 

 //To måder at definere arrays
let arrayOfLastname: Array<string> = ['Elise', 'Per']

arrayOfLastname.push()

let nestedArray: Array<Array<string>> = [['elise','per'], ['']]

//tester
let arrayOfStrings: string[] = ["Hello", "World"];

let arrayOfnumbers = [1, 2, 3]; 
arrayOfnumbers.push(4);

let mixedArray: Array<string | number> = ["Hello", "World", 33, 82];

//Ny tester om objekter - coffeemachine
let coffeeMachine = {
    max_ml:1000,
    name:"SuperMaker",
    brand: "Mellisa",
    func: () => {console.log("Making covfefe")}
}

coffeeMachine.func()

function getFullName (firstName: string, lastName: string){
    return firstName + " " + lastName
}

//Ovelse lav et objekt i TS
let personObject = {
    firstname: "Mathias",
    lastname: "Larsen",
    age: 32,
    haircolors: ["blond", "red"],
    height: 1.80,
    func: () => {console.log("Living")}

  };
  personObject.height


  let user ={
    age: 14,
    name: "Mario",
    Address: "Streename 122"
  }

//   let isAllowed: boolean = false

//Function i TS
  function veriFyAge(user: {age: number, name: string, Address: string  }){
    if (user.age >= 18){
        return user.name + "is allowed";
    }
    else {
        return user.name + "is not allowed";
    }
  }

  veriFyAge(user)

  //inputs in TS
  // hent vores input field
let textInput = document.getElementById("textInputField");

// tilføj en event listener med en anonym funktion der sender eventet med ind
textInput?.addEventListener("click", (event) => {
  event.preventDefault();
  let value = event.target as HTMLInputElement;
  console.log(value);
});
  


// console.log(firstName);
console.log('hello my first name is: ', firstName, ' and I am ', age,'old');

