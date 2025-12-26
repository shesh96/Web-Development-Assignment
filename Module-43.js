1. Count the occurrences
function countOccurrences(text) {
    let words = text.split(" ");
    let wordCount = new Map();

    for (let word of words) {
        if (wordCount.has(word)) {
            wordCount.set(word, wordCount.get(word) + 1);
        } else {
            wordCount.set(word, 1);
        }
    }

    return wordCount;
}

// Example
console.log(countOccurrences("hello world hello pw skills world"));

2. Only unique items are allowed
function uniqueItems(arr) {
    return new Set(arr);
}

// Example
console.log(uniqueItems([1, 2, 2, 3, 4, 4, 5]));

3. Swap the values (without temporary variable)
function swapValues(x, y) {
    let arr = [x, y];

    [arr[0], arr[1]] = [arr[1], arr[0]];

    return arr;
}

// Example
console.log(swapValues(5, 10)); // [10, 5]

4. Access random elements (First, Second, Last)
function extractElements(arr) {
    let [first, second, ...rest] = arr;
    let last = rest[rest.length - 1];

    return [first, second, last];
}

// Example
console.log(extractElements([1, 2, 3, 4, 5])); // [1, 2, 5]

5. Min and Max values
function minMaxValues(arr) {
    return {
        max: Math.max(...arr),
        min: Math.min(...arr)
    };
}

// Example
console.log(minMaxValues([5, 2, 7, 1, 9])); // { max: 9, min: 1 }

6. Nested Objects (Object Destructuring)
function extractPersonDetails(person) {
    const {
        name,
        address: { street }
    } = person;

    return { name, street };
}

// Example
const person = {
    name: "Mithun",
    age: 21,
    address: {
        street: "B8, Block B, Industrial Area",
        city: "Sector 62, Noida",
        state: "Uttar Pradesh"
    }
};

console.log(extractPersonDetails(person));
