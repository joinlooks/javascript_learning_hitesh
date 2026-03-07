let one = "Lakshya";
let two = one;
two = "Sharma";

console.table([one, two]);

// let obj = {
//     one: "Lakshya",
// };
// let obj2 = {
//     two: obj.one,
// };
// obj2.two = "Sharma";

// console.table([obj, obj2]);

let obj1 = {
    one: "Lakshya",
};

let obj2 = obj1;
obj2.one = "Sharma";

console.table([obj1, obj2]);
