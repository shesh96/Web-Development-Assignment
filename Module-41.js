1. Reverse String (Using setTimeout)
let input = "PW Skills";

setTimeout(() => {
    let reversed = input.split("").reverse().join("");
    console.log("Reversed String:", reversed);
}, 2000);

2. Random Number Generator with Delay and Progress Indication
let delay = 3;
let counter = delay;

let interval = setInterval(() => {
    console.log(`Generating number in ${counter} seconds...`);
    counter--;

    if (counter < 0) {
        clearInterval(interval);
        let randomNumber = Math.floor(Math.random() * 100);
        console.log("Random Number:", randomNumber);
    }
}, 1000);

3. Store Inventory – Convert USD to INR (Using map)
let inventory = {
    apple: 10,
    banana: 5,
    mango: 8
};

let exchangeRate = 80;

let inventoryInINR = Object.fromEntries(
    Object.entries(inventory).map(([item, price]) => {
        return [item, price * exchangeRate];
    })
);

console.log("Inventory in INR:", inventoryInINR);

4. Filtering and Capitalizing Books Published After 2010
let books = [
    { title: "Book One", author: "john doe", year: 2005 },
    { title: "Book Two", author: "jane smith", year: 2015 },
    { title: "Book Three", author: "mark brown", year: 2020 }
];

let filteredBooks = books
    .filter(book => book.year > 2010)
    .map(book => ({
        ...book,
        author: book.author
            .split(" ")
            .map(word => word[0].toUpperCase() + word.slice(1))
            .join(" ")
    }));

console.log(filteredBooks);

5. URL Validation (Using Regex)
function validateURL(url) {
    let regex = /^(http:\/\/|https:\/\/)[a-zA-Z0-9\-._~]+(\.[a-zA-Z]+)+$/;
    console.log(regex.test(url) ? "Valid URL" : "Invalid URL");
}

// Examples
validateURL("https://example.com");
validateURL("http://my-site123.org");

6. LinkedIn Profile URL Validator
function validateLinkedInURL(url) {
    let regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}$/;

    if (regex.test(url)) {
        console.log("Valid LinkedIn Profile URL");
    } else {
        console.log("Invalid LinkedIn Profile URL");
    }
}

// Examples
validateLinkedInURL("https://www.linkedin.com/in/shesh-ram");
validateLinkedInURL("https://linkedin.com/profile/test");
