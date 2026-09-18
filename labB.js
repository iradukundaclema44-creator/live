const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter first number: ", function(num1) {
    input.question("Enter second number: ", function(num2) {

        num1 = Number(num1);
        num2 = Number(num2);

        console.log("Sum =", num1 + num2);
        console.log("Difference =", num1 - num2); 
        console.log("Product =", num1 * num2); 
        console.log("Quotient =", num1 / num2);
         console.log("Remainder =", num1 % num2);

        input.close();
    });
});