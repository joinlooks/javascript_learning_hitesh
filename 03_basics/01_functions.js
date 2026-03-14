// function sayMyName() {
//     console.log("Lakshya");
// }

// // console.log(sayMyName());
// // console.log(sayMyName);

// function addition(a, b) {
//     return a + b;
// }

// const storeAddition = addition(2, "ds");
// console.log(storeAddition, typeof storeAddition);

// const firstPort = 0;
// const secondPort = 23;
// const finalPort = firstPort ?? secondPort ?? 3000;

// console.log(finalPort);

function calculateCartPrice(...price) {
    return price.reduce((accumulator, current) => accumulator + current, 0);
}

console.log(calculateCartPrice(321, 2354, 9876, 634, 213));
