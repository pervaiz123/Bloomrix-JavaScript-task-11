console.group("1. Syntax and script loading");

console.log("JavaScript statements are instructions.");

console.log("Use // for a single-line comment.");

console.log("Use /* ... */ for a block comment.");

console.log("This code runs from an external JavaScript module.");

console.groupEnd();



console.group("2. Variables");

var legacyVariable = "var";

let changeableVariable = "First value";

const fixedVariable = "const";


let declaredVariable;

// Initialization.
declaredVariable = "Initialized";

// Reassignment.
changeableVariable = "Reassigned";

legacyVariable = "var can also be reassigned";

console.log({
  legacyVariable,
  changeableVariable,
  fixedVariable,
  declaredVariable
});

// var can be redeclared.
var legacyVariable = "var can be redeclared";

console.log("Redeclared var:", legacyVariable);

// let and const are block-scoped.
if (true) {
  var functionScopedOutsideBlock = "var escapes this block";

  let blockScopedLet = "Only inside this block";

  const blockScopedConst = "Also only inside this block";

  console.log(blockScopedLet, blockScopedConst);
}

console.log("var outside block:", functionScopedOutsideBlock);

// Demonstrating actual function scope.
function demonstrateVarFunctionScope() {
  var functionScopedValue = "Inside function";

  return functionScopedValue;
}

console.log("Function scope:", demonstrateVarFunctionScope());

// A const object can have its properties changed.
const constObject = {
  name: "Initial name"
};

constObject.name = "Updated name";

console.log("Updated const object:", constObject);

console.groupEnd();


// 3. PRIMITIVE DATA TYPES

console.group("3. Primitive data types");

const stringType = "Hello";

const numberType = 25;

const bigintType = 9007199254740993n;

const booleanType = true;

let undefinedType;

const nullType = null;

const symbolType = Symbol("unique");

console.log("String:", typeof stringType);

console.log("Number:", typeof numberType);

console.log("BigInt:", typeof bigintType);

console.log("Boolean:", typeof booleanType);

console.log("Undefined:", typeof undefinedType);

console.log("Null surprise:", typeof nullType);

// typeof null returns "object" because of a historical JavaScript behavior.

console.log("Symbol:", typeof symbolType);

console.log("NaN:", typeof NaN);

console.log("Array:", typeof [1, 2]);

console.log("Array.isArray:", Array.isArray([1, 2]));

console.log("Function:", typeof function example() {});

console.groupEnd();


// 4. TYPE CONVERSION AND COERCION

console.group("4. Type conversion");

console.log("String:", String(123));

console.log("Number:", Number("123"));

console.log("Invalid number:", Number("hello"));

console.log("Boolean 1:", Boolean(1));

console.log("Boolean 0:", Boolean(0));

console.log("Boolean false string:", Boolean("false"));

console.log("parseInt:", parseInt("42px", 10));

console.log("parseFloat:", parseFloat("3.14rem"));

// Explicit conversion.
console.log("Explicit conversion:", Number("10") + 5);

// Implicit conversion.
console.log("Implicit numeric coercion:", "10" - 5);

console.log("Implicit string coercion:", "10" + 5);

console.log(
  "Number.isNaN:",
  Number.isNaN(Number("not numeric"))
);

console.groupEnd();


// 5. OPERATORS

console.group("5. Operators");

const firstNumber = 12;

const secondNumber = 5;

// Arithmetic operators.

console.log("Addition:", firstNumber + secondNumber);

console.log("Subtraction:", firstNumber - secondNumber);

console.log("Multiplication:", firstNumber * secondNumber);

console.log("Division:", firstNumber / secondNumber);

console.log("Remainder:", firstNumber % secondNumber);

console.log("Exponent:", firstNumber ** secondNumber);

// Assignment operators.

let operatorValue = 10;

operatorValue += 5;

operatorValue -= 2;

operatorValue *= 2;

operatorValue /= 2;

operatorValue %= 5;

console.log("Assignment result:", operatorValue);

// Comparison operators.

console.log("Greater than:", 12 > 5);

console.log("Less than:", 5 < 12);

console.log("Less than or equal:", 5 <= 5);

console.log("Loose equality:", 5 == "5");

console.log("Strict equality:", 5 === "5");

console.log("Strict inequality:", 5 !== "5");

// Logical operators.

console.log("Logical AND:", true && false);

console.log("Logical OR:", true || false);

console.log("Logical NOT:", !true);

// Nullish coalescing operator.

console.log("Nullish coalescing:", null ?? "Fallback");

console.log("Zero is not nullish:", 0 ?? 100);

// Optional chaining.

const optionalUser = {
  contact: {
    email: "student@example.com"
  }
};

console.log(
  "Existing email:",
  optionalUser.contact?.email
);

console.log(
  "Missing address:",
  optionalUser.address?.city
);

// Ternary operator.

const userAge = 20;

const ageResult =
  userAge >= 18 ? "Adult" : "Under 18";

console.log("Ternary result:", ageResult);

console.groupEnd();


// 6. CONDITIONS, TRUTHY/FALSY AND GUARD CONDITIONS

console.group("6. Conditions");

const examMarks = 76;

if (examMarks >= 80) {
  console.log("Grade A");

} else if (examMarks >= 70) {
  console.log("Grade B");

} else {
  console.log("Needs improvement");
}

// Switch statement.

const selectedDay = "Friday";

switch (selectedDay) {
  case "Monday":
    console.log("Start of the week");
    break;

  case "Friday":
    console.log("End of the working week");
    break;

  default:
    console.log("A different day");
}

// Falsy and truthy values.

const valuesToCheck = [
  false,
  0,
  -0,
  0n,
  "",
  null,
  undefined,
  NaN,
  "false",
  "0",
  [],
  {}
];

valuesToCheck.forEach(value => {
  console.log(value, Boolean(value));
});

// Guard condition.

function greet(name) {
  if (!name) {
    return "A name is required.";
  }

  return `Hello, ${name}!`;
}

console.log(greet(""));

console.log(greet("Sara"));

console.groupEnd();


// 7. LOOPS

console.group("7. Loops");

// For loop.

for (let index = 1; index <= 3; index++) {
  console.log("for:", index);
}

// While loop.

let whileIndex = 1;

while (whileIndex <= 2) {
  console.log("while:", whileIndex);

  whileIndex++;
}

// Do while loop.

let doWhileIndex = 1;

do {
  console.log("do...while:", doWhileIndex);

  doWhileIndex++;

} while (doWhileIndex <= 2);

// For...of loop.

for (const item of ["Apple", "Mango", "Orange"]) {
  console.log("for...of:", item);
}

// For...in loop.

const loopObject = {
  name: "Amina",
  subject: "JavaScript"
};

for (const key in loopObject) {
  if (Object.prototype.hasOwnProperty.call(loopObject, key)) {
    console.log(key, loopObject[key]);
  }
}

// Break and continue.

for (let number = 1; number <= 5; number++) {
  if (number === 2) {
    continue;
  }

  if (number === 4) {
    break;
  }

  console.log("break/continue:", number);
}

console.groupEnd();


// 8. FUNCTIONS

console.group("8. Functions");

// Function declaration.

console.log("Declaration:", add(2, 3));

function add(first, second) {
  return first + second;
}

// Function expression.

const multiply = function (first, second) {
  return first * second;
};

console.log("Expression:", multiply(3, 4));

// Parameters and default parameters.

function introduce(personName, city = "Unknown city") {
  return `${personName} lives in ${city}.`;
}

console.log(introduce("Sara"));

console.log(introduce("Sara", "Karachi"));

// Rest parameters.

function addAll(...values) {
  return values.reduce((total, value) => total + value, 0);
}

console.log("Rest parameters:", addAll(1, 2, 3, 4));

// Callback functions.

function runCalculation(value, callback) {
  return callback(value);
}

function double(value) {
  return value * 2;
}

console.log("Callback:", runCalculation(6, double));

console.groupEnd();


// 9. ARROW FUNCTIONS AND LEXICAL THIS

console.group("9. Arrow functions");

const subtract = (first, second) => first - second;

const square = value => value * value;

const getGreeting = () => "Hello from an arrow function";

console.log(subtract(9, 4));

console.log(square(5));

console.log(getGreeting());

// Arrow functions inherit this from their surrounding scope.

const arrowThisExample = {
  count: 0,

  increment() {
    const addOne = () => {
      this.count += 1;

      return this.count;
    };

    return addOne();
  }
};

console.log(
  "Lexical this:",
  arrowThisExample.increment()
);

// A regular method gets this from how it is called.

const regularThisExample = {
  name: "JavaScript",

  showName() {
    return this.name;
  }
};

console.log(
  "Regular method this:",
  regularThisExample.showName()
);

console.groupEnd();


// 10. SCOPE, CLOSURES AND SHADOWING

console.group("10. Scope and closures");

// Global object property.
// Top-level variables in an ES module are module-scoped,
// not automatically global properties.

globalThis.assignmentGlobalExample = "Global object value";

console.log(
  "Global object:",
  globalThis.assignmentGlobalExample
);

// Module scope.

const moduleScopeValue = "Available throughout this module";

function scopeExample() {
  const functionScopeValue = "Function scope";

  if (true) {
    let blockScopeValue = "Block scope";

    console.log(blockScopeValue);

    console.log(functionScopeValue);
  }

  console.log(moduleScopeValue);

  return functionScopeValue;
}

console.log(scopeExample());

// Variable shadowing.

const languageName = "Outer";

function showShadowing() {
  const languageName = "Inner";

  console.log("Inner value:", languageName);
}

showShadowing();

console.log("Outer value:", languageName);

// Closure.

function createCounter() {
  let count = 0;

  return function incrementCounter() {
    count += 1;

    return count;
  };
}

const counter = createCounter();

console.log("Closure:", counter(), counter(), counter());

// Remove the temporary global property.

delete globalThis.assignmentGlobalExample;

console.groupEnd();


// 11. ARRAYS

console.group("11. Arrays");

const emptyArray = [];

const fruits = ["Apple", "Mango", "Orange"];

console.log("Empty array:", emptyArray);

console.log("Array:", fruits);

console.log("Index 0:", fruits[0]);

console.log("Length:", fruits.length);

console.log("Last item:", fruits[fruits.length - 1]);

const fruitMethods = ["Apple", "Mango", "Orange"];

// push.

fruitMethods.push("Banana");

console.log("push:", fruitMethods);

// pop.

console.log("pop removed:", fruitMethods.pop());

// unshift.

fruitMethods.unshift("Grapes");

console.log("unshift:", fruitMethods);

// shift.

console.log("shift removed:", fruitMethods.shift());

// slice does not mutate original.

console.log("slice:", fruitMethods.slice(0, 2));

console.log("Original:", fruitMethods);

// splice mutates original.

const spliceArray = [...fruitMethods];

console.log(
  "splice removed:",
  spliceArray.splice(1, 1, "Peach")
);

console.log("After splice:", spliceArray);

// Other array methods.

console.log("includes:", fruitMethods.includes("Mango"));

console.log("indexOf:", fruitMethods.indexOf("Orange"));

console.log("join:", fruitMethods.join(", "));

console.log(
  "concat:",
  fruitMethods.concat(["Kiwi", "Pear"])
);

console.groupEnd();


// 12. ARRAY ITERATION AND TRANSFORMATION

console.group("12. Array iteration and transformation");

const values = [5, 2, 10, 3, 8];

// forEach.

values.forEach(value => {
  console.log("forEach:", value);
});

// map.

const mappedValues = values.map(value => value * 2);

// filter.

const filteredValues = values.filter(value => value > 4);

// find.

const foundValue = values.find(value => value > 6);

// findIndex.

const foundIndex = values.findIndex(value => value > 6);

// some.

const hasNegative = values.some(value => value < 0);

// every.

const allPositive = values.every(value => value > 0);

// reduce.

const reducedTotal = values.reduce(
  (total, value) => total + value,
  0
);

// sort.

const sortedAscending = [...values].sort(
  (first, second) => first - second
);

// reverse.

const reversedValues = [...values].reverse();

console.log({
  mappedValues,
  filteredValues,
  foundValue,
  foundIndex,
  hasNegative,
  allPositive,
  reducedTotal,
  sortedAscending,
  reversedValues,
  originalValues: values
});

console.groupEnd();


// 13. OBJECTS

console.group("13. Objects");

const student = {
  name: "Hassan",

  age: 22,

  address: {
    city: "Karachi",
    country: "Pakistan"
  },

  introduce() {
    return `My name is ${this.name}.`;
  }
};

// Properties.

console.log("Dot property:", student.name);

console.log("Bracket property:", student["age"]);

// Nested object.

console.log("Nested property:", student.address.city);

// Object method.

console.log("Object method:", student.introduce());

// Computed property.

const computedKey = "email";

student[computedKey] = "hassan@example.com";

console.log("Computed property:", student[computedKey]);

// Object methods.

console.log("Object.keys:", Object.keys(student));

console.log("Object.values:", Object.values(student));

console.log("Object.entries:", Object.entries(student));

console.groupEnd();


// 14. DESTRUCTURING

console.group("14. Destructuring");

// Array destructuring.

const coordinates = [24.86, 67.01];

const [latitude, longitude] = coordinates;

console.log("Latitude:", latitude);

console.log("Longitude:", longitude);

// Object destructuring.

const account = {
  username: "learner01",
  level: "Beginner",
  active: true
};

const {
  username,
  level,
  active
} = account;

console.log(username, level, active);

// Renaming a property.

const {
  username: displayName,
  country = "Pakistan"
} = account;

console.log(displayName, country);

console.groupEnd();


// 15. SPREAD AND REST

console.group("15. Spread and rest");

// Array spread.

const firstArray = ["A", "B"];

const combinedArray = [
  ...firstArray,
  "C",
  "D"
];

console.log("Array spread:", combinedArray);

// Object spread.

const originalSettings = {
  theme: "light",
  notifications: true
};

const changedSettings = {
  ...originalSettings,
  theme: "dark"
};

console.log("Object spread:", changedSettings);

// Spread in function arguments.

console.log(
  "Spread arguments:",
  Math.max(...[4, 9, 2])
);

// Rest in function parameters.

function collect(first, ...remaining) {
  return {
    first,
    remaining
  };
}

console.log(
  "Function rest:",
  collect("One", "Two", "Three")
);

// Object rest.

const {
  theme,
  ...remainingSettings
} = changedSettings;

console.log(theme, remainingSettings);

console.groupEnd();


// 16. TEMPLATE LITERALS AND STRING METHODS

console.group("16. Template literals and strings");

const paddedText = "  JavaScript  ";

const cleanText = paddedText.trim();

// Template literal.

console.log(`Welcome to ${cleanText}!`);

// String methods.

console.log("includes:", cleanText.includes("Script"));

console.log("startsWith:", cleanText.startsWith("Java"));

console.log("endsWith:", cleanText.endsWith("Script"));

console.log("trim:", paddedText.trim());

console.log(
  "split:",
  "HTML,CSS,JavaScript".split(",")
);

console.log(
  "replace:",
  "Learn Java".replace("Java", "JavaScript")
);

console.log("toLowerCase:", cleanText.toLowerCase());

console.log("toUpperCase:", cleanText.toUpperCase());

console.groupEnd();


// 17. DATES AND MATH

console.group("17. Dates and Math");

const currentDate = new Date();

const fixedDate = new Date("2026-11-06T12:00:00");

console.log("Current date:", currentDate);

console.log("Specific date:", fixedDate);

console.log("Current year:", currentDate.getFullYear());

console.log("Month index:", currentDate.getMonth());

// Math methods.

console.log("Math.round:", Math.round(4.6));

console.log("Math.floor:", Math.floor(4.9));

console.log("Math.ceil:", Math.ceil(4.1));

console.log("Math.random:", Math.random());

console.log(
  "Random integer 1-10:",
  Math.floor(Math.random() * 10) + 1
);

console.log("Math.max:", Math.max(4, 9, 2));

console.log("Math.min:", Math.min(4, 9, 2));

console.groupEnd();


// 18. ERROR HANDLING

console.group("18. Error handling");

function divide(first, second) {
  if (
    typeof first !== "number" ||
    typeof second !== "number"
  ) {
    throw new TypeError("Both inputs must be numbers.");
  }

  if (second === 0) {
    throw new Error("The divisor cannot be zero.");
  }

  return first / second;
}

try {
  console.log("Valid division:", divide(10, 2));

  console.log("Division attempt:", divide(10, 0));

} catch (error) {
  console.error("Caught error:", error.message);

} finally {
  console.log("Finally always runs after try/catch.");
}

console.groupEnd();


// 19. STRICT MODE AND CLEAN CODING PRACTICES

console.group("19. Strict mode and clean practices");


function inspectThisInStrictMode() {
  return this;
}

console.log(
  "this in a directly called strict-mode function:",
  inspectThisInStrictMode()
);

console.log("Clean coding practices:");

console.log("Prefer const when reassignment is unnecessary.");

console.log("Use let when reassignment is required.");

console.log("Avoid var in modern JavaScript.");

console.log("Prefer === over ==.");

console.log("Use meaningful variable names.");

console.log("Keep functions focused.");

console.log("Validate inputs and handle errors clearly.");

console.groupEnd();

console.log("All JavaScript fundamentals examples have finished.");