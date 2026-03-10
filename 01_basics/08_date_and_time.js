// const myDate = new Date();

// console.log(myDate);

// // const date = new Date(2026, 5, 1); // June 1st, 2026
// const formatter = new Intl.DateTimeFormat("en-US", {
//     timeZone: "Asia/Delhi",
//     timeZoneName: "long",
//     hour: "numeric",
//     minute: "numeric",
//     second: "numeric",
// });

// console.log(formatter.format(myDate));

// const date = new Date(2024, 11, 31, 14, 34, 59);
// console.log(date.toLocaleString());

const dateObject = new Date(Date.now());
console.log(dateObject.toLocaleString());
