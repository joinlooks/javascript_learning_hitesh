// const obj = {};
// const another = new Object();

import { log } from "../utility.js";

// globalThis.name = "Shriman Lakshya";

// const symbol = Symbol("Lakshya's Symbol");
// const object = {
//     name: "Lakshya Kaushal Sharma",
//     age: 24,
//     [symbol]: "Is this a symbol?",
//     greetings: function () {
//         console.log(`Hey, ${this.name}`);
//     },
//     anotherGreetings: () => {
//         console.log(`Good morning, ${globalThis.name}`);
//     },
// };

// // object.greetings();
// object.anotherGreetings();

// // console.log(object);
// // console.log(object[symbol]);

// const user = {
//     name: "Lakshya",
//     email: "lakshya@google.com",
// };
// // Object.freeze(user);
// Object.seal(user);

// // user.number = 23423523;

// console.log(user);

// user.name = "Kaushal";
// console.log(user);

// const user = {
//     id: 23423,
//     name: {
//         firstName: "Lakshya",
//         lastName: "Sharma",
//     },
// };

const user = new Object({
    id: 23423,
    name: {
        firstName: "Lakshya",
        lastName: "Sharma",
    },
});

// console.log(user.hasOwnProperty("firstName"));
// console.log(user.name.hasOwnProperty("firstName"));

const anotherUser = {
    id: 3245,
    name: "Lakshya Kaushal Sharma",
};

log(anotherUser.propertyIsEnumerable());
log(user.propertyIsEnumerable());

// console.log(user.propertyIsEnumerable());

// console.log(Object.length);

// const value = Object.keys(user);
// const anotherValue = Object.values(user);
// console.log(value, anotherValue);

// const yetAnotherValue = Object.keys(user.name);
// console.log(yetAnotherValue);

// // This concept is called Optional chaining
// console.log(user.games?.name);

// console.log(user.name.firstName);
// console.log(user.name.middleName);
// console.log(user.name.middleName);

// const a = {
//     1: "a",
//     2: "b",
// };
// const b = {
//     2: "c",
//     3: "d",
// };

// // const c = Object.assign({}, b, a);
// // Use this syntax, always - spread operator
// const c = { ...a, ...b };

// console.log(a, b, c);
