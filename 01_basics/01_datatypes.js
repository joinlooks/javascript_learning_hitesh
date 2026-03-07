var value = Symbol("Hey");
var another = Symbol("Hey");
var num = 23;
console.table([value, another, num]);

// JavaScript is Dynamically Typed
// Variables do not hold types, values do. We can change the type of a variable.

let dynamicScore = 100; // Number
console.log(typeof dynamicScore);

dynamicScore = "A+"; // Reassigned to String (valid in JS)
console.log(typeof dynamicScore);

const num = BigInt(3);
console.log(num * BigInt(4), typeof num);

console.log(__proto__);

const user = {
    name: "Lakshya",
    greet() {
        console.log("Hi!");
    },
};

console.log(user.toString()); // Where did .toString() come from?
console.table([user.toString(), user.__proto__.toString()]); // Both are the same function, inherited from Object.prototype

const arr = [3, 5, 6];
console.log(typeof arr, arr, arr.toString());

const sayHi = () => {
    console.log("Say, Hi!");
};
const sayHello = function () {
    console.log("Say, Hello!");
};
function sayNamstey() {
    console.log("Say, Namastey!");
}

console.log(typeof sayHi);
console.log(typeof sayHello);
console.log(typeof sayNamstey);
