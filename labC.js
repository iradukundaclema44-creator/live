const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your score (0-100): ", (answer) => {
    let score = Number(answer);

    if (score < 0 || score > 100) {
        console.log("Invalid score. Please enter a score between 0 and 100.");
    } else if (score >= 90) {
        console.log("Grade: A");
    } else if (score >= 80) {
        console.log("Grade: B");
    } else if (score >= 70) {
        console.log("Grade: C");
    } else if (score >= 60) {
        console.log("Grade: D");
    } else {
        console.log("Grade: F");
    }

    rl.close();
});