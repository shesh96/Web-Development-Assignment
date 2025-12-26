1. Password Validator
function passwordValidator(password, confirmPassword) {
    if (password === confirmPassword) {
        console.log("Password Matched. Password validation successful.");
    } else {
        console.log("Password didn't match. Password validation unsuccessful.");
    }
}

// Example
passwordValidator("abc123", "abc123");

2. Calculator (Using switch statement)
function calculator(num1, num2, operator) {
    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            console.log("Invalid operator");
            return;
    }

    console.log("Result:", result);
}

// Example
calculator(10, 5, "*");

3. Color Mixer
function colorMixer(color1, color2) {
    switch (true) {
        case (color1 === "red" && color2 === "blue") || (color1 === "blue" && color2 === "red"):
            console.log("purple");
            break;

        case (color1 === "red" && color2 === "yellow") || (color1 === "yellow" && color2 === "red"):
            console.log("orange");
            break;

        case (color1 === "blue" && color2 === "yellow") || (color1 === "yellow" && color2 === "blue"):
            console.log("green");
            break;

        default:
            console.log("Invalid color combination");
    }
}

// Example
colorMixer("red", "blue");

4. Highest Marks (Using Ternary Operator)
function highestMarks(marks) {
    let highest = marks[0];

    for (let i = 1; i < marks.length; i++) {
        highest = marks[i] > highest ? marks[i] : highest;
    }

    console.log("Highest Marks:", highest);
}

// Example
highestMarks([78, 85, 92, 88, 76]);

5. Capitalize First Letter (Using Ternary Operator)
function capitalizeName(name) {
    return name[0] === name[0].toLowerCase()
        ? name[0].toUpperCase() + name.slice(1)
        : name;
}

// Example
console.log(capitalizeName("shesh"));

6. Vowel Counter
function countVowels(name) {
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let char of name) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    console.log("Number of vowels:", count);
}

// Example
countVowels("Shesh Ram");

7. Remove Duplicates
function removeDuplicates(cartItems) {
    let uniqueItems = [];

    for (let item of cartItems) {
        if (!uniqueItems.includes(item)) {
            uniqueItems.push(item);
        }
    }

    console.log("Cart without duplicates:", uniqueItems);
}

// Example
removeDuplicates(["apple", "banana", "apple", "orange", "banana"]);
