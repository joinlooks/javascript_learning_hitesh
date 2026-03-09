// const score = 500;
// const marks = new Number(300);

// // console.table([score, marks]);
// console.log(score, typeof score);
// console.log(marks, typeof marks);

// const another = 234.2234;
// console.log(another.toPrecision());

// console.log(Number.MAX_SAFE_INTEGER.toLocaleString("en-US"));
// console.log(Number.MIN_SAFE_INTEGER.toLocaleString("en-US"));
// console.log(Number.NEGATIVE_INFINITY.toLocaleString("en-US"));
// console.log(Number.MAX_VALUE);

// console.table({
//     MAX_VALUE: Number.MAX_VALUE,
//     MAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER,
// });

// const num = new String();
// console.log(Math, Number, String, num);

// console.log(Number, typeof Number);
// console.log(Object.getOwnPropertyNames(String));

// aditya bhawsar is god

// const value = -5;
// const anotherValue = -value;
// console.log(anotherValue, value);

// const value = Math.max(34, 3, 56, 34, -2345, 235, 25, 25);
// console.log(value);

const min = 100;
const max = 1000;

// Generate random integer between min and max values
const list = [];
for (let i = 0; i < 1000; i++) {
    const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
    list.push(randomInteger);
}

console.log(Math.max(...list), Math.min(...list));
