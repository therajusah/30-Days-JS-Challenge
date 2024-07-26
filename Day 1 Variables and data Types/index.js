// Task 1

var num = 1;
console.log(num);

// Task 2

let str = "Raju";
console.log(str);

// Task 3

const boolean = true;
console.log(boolean);

// Task 4

let num11 = 1;
let str1 = "raju";
let boolean1 = true;
let object = {
  firstName: "Raju",
  lastName: "Kumar"
};
let arr = [1,3,4,5,7,8];
console.log(typeof(num11));
console.log(typeof(str1));
console.log(typeof(boolean1));
console.log(typeof(object));
console.log(typeof(arr));

// Task 5

let num1 = 5;
console.log(num1);
num1 = 6;
console.log(num1);  // output 5 6

// Task 6

const num9 = 5;
console.log(num9) // 5
num9 = 7; // error const can't be reassigned
console.log(num9) 

// Feature request 
// 1

const stringVar = "Hello!";
const numberVar = 42;
const booleanVar = true;
const nullVar = null;
const undefinedVar = undefined;
const objectVar = { name: "Alice", age: 25 };
const arrayVar = [1, 2, 3, 4, 5];
const functionVar = function() { return "I am a function"; };

console.log(`stringVar: ${stringVar}, Type: ${typeof stringVar}`);
console.log(`numberVar: ${numberVar}, Type: ${typeof numberVar}`);
console.log(`booleanVar: ${booleanVar}, Type: ${typeof booleanVar}`);
console.log(`nullVar: ${nullVar}, Type: ${typeof nullVar}`);
console.log(`undefinedVar: ${undefinedVar}, Type: ${typeof undefinedVar}`);
console.log(`objectVar: ${JSON.stringify(objectVar)}, Type: ${typeof objectVar}`);
console.log(`arrayVar: ${arrayVar}, Type: ${typeof arrayVar}`);
console.log(`functionVar: ${functionVar}, Type: ${typeof functionVar}`);

// 2

let num3 = 3;
console.log(num3); // 3
num3 = 4;
console.log(num3); // 4

 const num4 = 5;
console.log(num4); // 5
try {
    num4 = 6; // Reassigned value 
} catch (error) {
    console.log(error.message); 
}
 
