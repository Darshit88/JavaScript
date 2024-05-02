function Num(number) {
    if (number > 0) {
        return "Positive";
    } else if (number < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

let inputNumber = parseFloat(prompt("Enter a number:"));
let result = Num(inputNumber);
console.log("The number is", result);
