const symbol = Symbol("Lakshya's Symbol");
const object = {
    name: "Lakshya Kaushal Sharma",
    age: 24,
    [symbol]: "Is this a symbol?",
    greetings: function () {
        console.log(`Hey, ${this.name}`);
    },
};

console.log(object.greetings());