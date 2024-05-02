function compare(num1, num2) {
    if (num1 === num2) {
        return "Both numbers are the same";
    } else if (num1 > num2) {
        return "greater than";
    } else {
        return "Less than";
    }
}

let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let result = compare(num1, num2);
console.log(result);
