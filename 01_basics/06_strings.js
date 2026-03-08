// const game = new String("SanAndreas");

// console.log(game[1]);

// const gameProto = Object.getPrototypeOf(game);
// console.log();

// const hey = "hey";
// console.table([hey.length, hey.toUpperCase()]);

// const abc = "0123456";
// const substr = abc.substring(0, 4);
// const slice = abc.slice(0, 4);
// const negSubstr = abc.substring(-3, 0);
// const negSlice = abc.slice(-7, 1);

// // console.table([abc, substr, slice, negSubstr, negSlice]);
// console.log(abc.slice(0, 7), abc.slice(-7));

// const securities = "securities.json";
// if (securities.slice(-4) === "json") {
//     console.log("Correct format");
// } else {
//     console.log("Incorrect format");
// }

// At least typing with a mechanical keyboard will give me vibe of a coder.
// Typing like a beast and will not have to look at the keyboard while typing.
// So what should I go for? Red switches or blue switches?

const url = "https://lakshyakabusiness@lakshya.com";
const modifiedUrl = url.replace("lakshya", "sharma");
const modifiedAllUrl = url.replaceAll("lakshya", "sharmafamily");
// console.table([url, modifiedUrl, modifiedAllUrl, url.includes("lakshya")]);

// console.log(url.split("lakshya"));

console.log(countOccurrencesInAString(url, "lakshya"));

function countOccurrencesInAString(url, key) {
    if (!key) return 0;
    const occurrences = url.split(key);
    return occurrences.length - 1;
}
