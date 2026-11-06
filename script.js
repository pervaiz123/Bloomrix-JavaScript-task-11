console.group("1. Syntax and script loading");
console.log("JavaScript statements are instructions.");
console.log("Use // for a single-line comment and /* ... */ for a block comment.");
console.log("This code is running from an external JavaScript module.");
console.groupEnd();



console.group("2. Variables");
var legacyVariable = "var";
let changeableVariable = "First value";
const fixedVariable = "const";

let declaredVariable;                 // Declaration only; current value is undefined.
declaredVariable = "Initialized";     // Initialization assigns its first value.
changeableVariable = "Reassigned";    // Reassignment changes an existing let variable.
legacyVariable = "var can be reassigned too";

console.log({ legacyVariable, changeableVariable, fixedVariable, declaredVariable });

// var is function-scoped; let and const are block-scoped.
if (true) {
  var functionScoped = "Visible outside this block";
  let blockScopedLet = "Visible only inside this block";
  const blockScopedConst = "Also visible only inside this block";
  console.log(blockScopedLet, blockScopedConst);
}
console.log(functionScoped);

// const prevents reassignment of the binding, not mutation of an object.
const constObject = { name: "Initial name" };
constObject.name = "Updated property";
console.log("A const object's property can change:", constObject);
console.groupEnd();


// 3. PRIMITIVE DATA TYPES AND TYPEOF
console.group("3. Primitive data types");
const stringType = "Hello";
const numberType = 25;
const bigintType = 9007199254740993n;
const booleanType = true;
let undefinedType;
const nullType = null;
const symbolType = Symbol("unique");

console.log("string:", typeof stringType);
console.log("number:", typeof numberType);
console.log("bigint:", typeof bigintType);
console.log("boolean:", typeof booleanType);
console.log("undefined:", typeof undefinedType);
console.log("null surprise:", typeof nullType); // Historical result: "object".
console.log("symbol:", typeof symbolType);
console.log("typeof NaN:", typeof NaN);           // "number".
console.log("typeof array:", typeof [1, 2]);      // "object".
console.log("Array.isArray:", Array.isArray([1, 2]));
console.log("typeof function:", typeof function example() {});
console.groupEnd();


// 4. TYPE CONVERSION AND COERCION
console.group("4. Type conversion");
console.log("String(123):", String(123));
console.log("Number('123'):", Number("123"));
console.log("Number('hello'):", Number("hello")); // NaN.
console.log("Boolean(1):", Boolean(1));
console.log("Boolean(0):", Boolean(0));
console.log("Boolean('false'):", Boolean("false")); // Non-empty string is true.
console.log("parseInt('42px', 10):", parseInt("42px", 10));
console.log("parseFloat('3.14rem'):", parseFloat("3.14rem"));

// Explicit conversion is requested by the programmer.
console.log("Explicit conversion:", Number("10") + 5);
// Implicit coercion is performed automatically by JavaScript.
console.log("Implicit numeric coercion:", "10" - 5);
console.log("Implicit string coercion:", "10" + 5);
console.log("Number.isNaN:", Number.isNaN(Number("not numeric")));
console.groupEnd();


// 5. OPERATORS
console.group("5. Operators");
const firstNumber = 12;
const secondNumber = 5;

// Arithmetic operators: +, -, *, /, %, **.
console.log("Arithmetic:", {
  addition: firstNumber + secondNumber,
  subtraction: firstNumber - secondNumber,
  multiplication: firstNumber * secondNumber,
  division: firstNumber / secondNumber,
  remainder: firstNumber % secondNumber,
  exponent: firstNumber ** secondNumber
});

// Assignment operators: =, +=, -=, *=, /=, %=.
let operatorValue = 10;
operatorValue += 5;
operatorValue -= 2;
operatorValue *= 2;
operatorValue /= 2;
operatorValue %= 5;
console.log("Assignment result:", operatorValue);

// Comparison and equality operators.
console.log("Greater than:", 12 > 5);
console.log("Less than or equal:", 5 <= 5);
console.log("Loose equality:", 5 == "5");   // Converts types before comparison.
console.log("Strict equality:", 5 === "5"); // Compares value and type.
console.log("Strict inequality:", 5 !== "5");

// Logical operators: && (AND), || (OR), ! (NOT).
console.log("Logical AND:", true && false);
console.log("Logical OR:", true || false);
console.log("Logical NOT:", !true);

// ?? uses the fallback only for null or undefined.
console.log("Nullish coalescing:", null ?? "Fallback");
console.log("Zero is not nullish:", 0 ?? 100);

// ?. safely accesses a property when the left side is null/undefined.
const optionalUser = { contact: { email: "student@example.com" } };
console.log("Optional chaining, existing:", optionalUser.contact?.email);
console.log("Optional chaining, missing:", optionalUser.address?.city);

// Ternary: condition ? expressionIfTrue : expressionIfFalse.
const userAge = 20;
const ageResult = userAge >= 18 ? "Adult" : "Under 18";
console.log("Ternary result:", ageResult);
console.groupEnd();


// 6. CONDITIONS, TRUTHY/FALSY VALUES, GUARD CONDITIONS
console.group("6. Conditions");
const examMarks = 76;
if (examMarks >= 80) {
  console.log("Grade A");
} else if (examMarks >= 70) {
  console.log("Grade B");
} else {
  console.log("Needs improvement");
}

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

// Falsy values include false, 0, -0, 0n, "", null, undefined, and NaN.
// Values such as "false", "0", [], and {} are truthy.
[false, 0, -0, 0n, "", null, undefined, NaN, "false", "0", [], {}]
  .forEach(value => console.log("Truthy/falsy:", value, Boolean(value)));

// A guard condition exits early when input is missing or invalid.
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
for (let index = 1; index <= 3; index++) {
  console.log("for:", index);
}

let whileIndex = 1;
while (whileIndex <= 2) {
  console.log("while:", whileIndex);
  whileIndex++;
}

let doWhileIndex = 1;
do {
  console.log("do...while:", doWhileIndex);
  doWhileIndex++;
} while (doWhileIndex <= 2);

for (const item of ["Apple", "Mango", "Orange"]) {
  console.log("for...of value:", item);
}

const loopObject = { name: "Amina", subject: "JavaScript" };
for (const key in loopObject) {
  console.log("for...in key and value:", key, loopObject[key]);
}

// continue skips the current iteration; break exits the loop.
for (let number = 1; number <= 5; number++) {
  if (number === 2) continue;
  if (number === 4) break;
  console.log("break/continue:", number);
}
console.groupEnd();


// 8. FUNCTIONS: DECLARATIONS, EXPRESSIONS, PARAMETERS, RETURN, DEFAULT, REST, CALLBACKS
console.group("8. Functions");

// Function declaration.
console.log("Declaration:", add(2, 3)); // Declaration is hoisted.
function add(first, second) {
  return first + second;
}

// Function expression.
const multiply = function (first, second) {
  return first * second;
};
console.log("Expression:", multiply(3, 4));

// Parameters are names in the definition; arguments are supplied values.
function introduce(personName, city = "Unknown city") {
  return `${personName} lives in ${city}.`;
}
console.log("Default parameter:", introduce("Sara"));
console.log("Passed arguments:", introduce("Sara", "Karachi"));

// Rest parameter gathers remaining arguments into an array.
function addAll(...values) {
  return values.reduce((total, value) => total + value, 0);
}
console.log("Rest parameters:", addAll(1, 2, 3, 4));

// Callback: a function passed to another function.
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
console.log(subtract(9, 4), square(5), getGreeting());

// Arrow functions do not create their own this; they inherit it lexically.
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
console.log("Lexical this:", arrowThisExample.increment());

// A regular function's this depends on how that function is called.
// Use regular method syntax when a method needs its own this.
console.groupEnd();


// 10. SCOPE, CLOSURES, AND VARIABLE SHADOWING
console.group("10. Scope and closures");
const moduleScopeValue = "Available throughout this module";

function scopeExample() {
  const functionScopeValue = "Available inside this function";
  if (true) {
    let blockScopeValue = "Available inside this block";
    console.log(blockScopeValue, functionScopeValue);
  }
  console.log(moduleScopeValue);
  return functionScopeValue;
}
console.log(scopeExample());

// Shadowing: an inner declaration uses the same name as an outer declaration.
const languageName = "Outer";
function showShadowing() {
  const languageName = "Inner";
  console.log("Shadowed inner value:", languageName);
}
showShadowing();
console.log("Outer value remains:", languageName);

// Closure: the returned inner function retains access to its outer variable.
function createCounter() {
  let count = 0;
  return function incrementCounter() {
    count += 1;
    return count;
  };
}
const counter = createCounter();
console.log("Closure:", counter(), counter(), counter());
console.groupEnd();


// 11. ARRAYS: CREATION, INDEXING, LENGTH, AND REQUIRED METHODS
console.group("11. Arrays");
const emptyArray = [];
const fruits = ["Apple", "Mango", "Orange"];
console.log("Created arrays:", emptyArray, fruits);
console.log("Index 0:", fruits[0]);
console.log("Length:", fruits.length);
console.log("Last item:", fruits[fruits.length - 1]);

const fruitMethods = ["Apple", "Mango", "Orange"];
fruitMethods.push("Banana");
console.log("push:", fruitMethods);
console.log("pop removed:", fruitMethods.pop());
fruitMethods.unshift("Grapes");
console.log("unshift:", fruitMethods);
console.log("shift removed:", fruitMethods.shift());
console.log("slice:", fruitMethods.slice(0, 2)); // Does not mutate original.
console.log("Original after slice:", fruitMethods);

const spliceArray = [...fruitMethods];
console.log("splice removed:", spliceArray.splice(1, 1, "Peach")); // Mutates array.
console.log("After splice:", spliceArray);
console.log("includes:", fruitMethods.includes("Mango"));
console.log("indexOf:", fruitMethods.indexOf("Orange"));
console.log("join:", fruitMethods.join(", "));
console.log("concat:", fruitMethods.concat(["Kiwi", "Pear"]));
console.groupEnd();


// 12. ARRAY ITERATION AND TRANSFORMATION
console.group("12. Array iteration and transformation");
const values = [5, 2, 10, 3, 8];

values.forEach(value => console.log("forEach:", value));
const mappedValues = values.map(value => value * 2);
const filteredValues = values.filter(value => value > 4);
const foundValue = values.find(value => value > 6);
const foundIndex = values.findIndex(value => value > 6);
const hasNegative = values.some(value => value < 0);
const allPositive = values.every(value => value > 0);
const reducedTotal = values.reduce((total, value) => total + value, 0);

// sort() and reverse() mutate their array. Copies are used to preserve values.
const sortedAscending = [...values].sort((first, second) => first - second);
const sortedDescending = [...values].sort((first, second) => second - first);
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
  sortedDescending,
  reversedValues,
  originalValues: values
});
console.groupEnd();


// 13. OBJECTS: PROPERTIES, METHODS, NESTED/COMPUTED PROPERTIES, OBJECT METHODS
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

console.log("Dot property:", student.name);
console.log("Bracket property:", student["age"]);
console.log("Nested property:", student.address.city);
console.log("Object method:", student.introduce());

const computedKey = "email";
student[computedKey] = "hassan@example.com";
console.log("Computed property:", student[computedKey]);
console.log("Object.keys:", Object.keys(student));
console.log("Object.values:", Object.values(student));
console.log("Object.entries:", Object.entries(student));
console.groupEnd();


// 14. ARRAY AND OBJECT DESTRUCTURING
console.group("14. Destructuring");
const coordinates = [24.86, 67.01];
const [latitude, longitude] = coordinates;
console.log("Array destructuring:", latitude, longitude);

const account = { username: "learner01", level: "Beginner", active: true };
const { username, level, active } = account;
console.log("Object destructuring:", username, level, active);

const { username: displayName, country = "Pakistan" } = account;
console.log("Renamed property and default:", displayName, country);
console.groupEnd();


// 15. SPREAD AND REST SYNTAX
console.group("15. Spread and rest");
const firstArray = ["A", "B"];
const combinedArray = [...firstArray, "C", "D"];
console.log("Array spread:", combinedArray);

const originalSettings = { theme: "light", notifications: true };
const changedSettings = { ...originalSettings, theme: "dark" };
console.log("Object spread:", changedSettings);
console.log("Spread into function arguments:", Math.max(...[4, 9, 2]));

function collect(first, ...remaining) {
  return { first, remaining };
}
console.log("Function rest parameter:", collect("One", "Two", "Three"));

const { theme, ...remainingSettings } = changedSettings;
console.log("Object rest:", theme, remainingSettings);
console.groupEnd();


// 16. TEMPLATE LITERALS AND STRING METHODS
console.group("16. Template literals and strings");
const paddedText = "  JavaScript  ";
const cleanText = paddedText.trim();

console.log(`Template literal: Welcome to ${cleanText}!`);
console.log("includes:", cleanText.includes("Script"));
console.log("startsWith:", cleanText.startsWith("Java"));
console.log("endsWith:", cleanText.endsWith("Script"));
console.log("trim:", paddedText.trim());
console.log("split:", "HTML,CSS,JavaScript".split(","));
console.log("replace:", "Learn Java".replace("Java", "JavaScript"));
console.log("toLowerCase:", cleanText.toLowerCase());
console.log("toUpperCase:", cleanText.toUpperCase());
console.groupEnd();


// 17. DATES AND BASIC MATH METHODS
console.group("17. Dates and Math");
const currentDate = new Date();
const fixedDate = new Date("2026-11-06T12:00:00");
console.log("Current Date:", currentDate);
console.log("Specific Date:", fixedDate);
console.log("Current year:", currentDate.getFullYear());
console.log("Month index (January is 0):", currentDate.getMonth());

console.log("Math.round:", Math.round(4.6));
console.log("Math.floor:", Math.floor(4.9));
console.log("Math.ceil:", Math.ceil(4.1));
console.log("Math.random (0 inclusive, 1 exclusive):", Math.random());
console.log("Random integer 1-10:", Math.floor(Math.random() * 10) + 1);
console.log("Math.max:", Math.max(4, 9, 2));
console.log("Math.min:", Math.min(4, 9, 2));
console.groupEnd();


// 18. ERROR HANDLING: THROW, TRY, CATCH, FINALLY
console.group("18. Error handling");
function divide(first, second) {
  if (typeof first !== "number" || typeof second !== "number") {
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



console.group("19. Strict mode and clean practices");

function inspectThisInStrictMode() {
  return this;
}
console.log("this in a directly called strict-mode function:", inspectThisInStrictMode());

console.log("Clean practices: prefer const, use let when reassignment is needed,");
console.log("avoid var in modern code, use meaningful names, use ===,");
console.log("keep functions focused, validate inputs, and handle errors clearly.");
console.groupEnd();

console.log("All JavaScript fundamentals examples have finished.");