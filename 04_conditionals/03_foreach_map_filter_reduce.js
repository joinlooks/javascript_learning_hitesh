// const heights = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// filter() -> returns the results in the form of an array
// const answer = heights.filter((item) => {
//     return item > 5;
// });
// const answer = heights.filter((item) => item > 5);

// // Implement the functionality of filter via forEach
// const answer = [];
// heights.forEach((item) => {
//     if (item > 5) {
//         answer.push(item);
//     }
// });

// console.log(answer);

const books = [
    {
        name: "The Great Gatsby",
        genre: "Classic Literature",
        publishingYear: 1925,
        latestEditionYear: 2021,
    },
    {
        name: "Dune",
        genre: "Science Fiction",
        publishingYear: 1965,
        latestEditionYear: 2019,
    },
    {
        name: "The Hobbit",
        genre: "Fantasy",
        publishingYear: 1937,
        latestEditionYear: 2020,
    },
    {
        name: "Atomic Habits",
        genre: "Self-Help",
        publishingYear: 2018,
        latestEditionYear: 2018,
    },
    {
        name: "The Catcher in the Rye",
        genre: "Coming-of-age",
        publishingYear: 1951,
        latestEditionYear: 2023,
    },
    {
        name: "Thinking, Fast and Slow",
        genre: "Psychology",
        publishingYear: 2011,
        latestEditionYear: 2011,
    },
    {
        name: "Project Hail Mary",
        genre: "Science Fiction",
        publishingYear: 2021,
        latestEditionYear: 2022,
    },
    {
        name: "The 7 Habits of Highly Effective People",
        genre: "Business",
        publishingYear: 1989,
        latestEditionYear: 2020,
    },
    {
        name: "Brave New World",
        genre: "Dystopian",
        publishingYear: 1932,
        latestEditionYear: 2014,
    },
    {
        name: "The Silent Patient",
        genre: "Psychological Thriller",
        publishingYear: 2019,
        latestEditionYear: 2019,
    },
];

// // Filter out books which have latest edition after 2020
// const answer = books
//     .filter((item) => item.latestEditionYear >= 2020)
//     .map((item) => item.name);
// console.log(answer);

// // Find out unique genres
// const genres = new Set(books.map((book) => book.genre));
// console.log(genres);

// Find out all Fantasy books
// const fantasy = books
//     .filter((book) => book.genre === "Science Fiction")
//     .map((book) => book.name);
// console.log(fantasy);

// const frequencies = [1, 2, 3, 4, 5];
// const changedFrequencies = frequencies.map((item) => item + 10);
// console.log(changedFrequencies);

// Sum of elements in the array using reduce() method
const prices = [10, 20, 30];
const answer = prices.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(prices, answer);

// prices = [1, 3]; // Not allowed
// prices.push(99); // Allowed
// console.log(prices);
