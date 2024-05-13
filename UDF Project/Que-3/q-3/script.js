// Dollar to Rupees
function dollarToRupees(dollar) {
    const exchangeRate = 74.50; 
    return dollar * exchangeRate;
}

// Rupees to Dollar
function rupeesToDollar(rupees) {
    const exchangeRate = 0.0134; 
    return rupees * exchangeRate;
}

const dollarValue = 100;
const rupeesValue = dollarToRupees(dollarValue);
console.log(`${dollarValue} Dollar = ${rupeesValue.toFixed(2)} Rupees`);

const rupeesInput = 7500;
const dollarOutput = rupeesToDollar(rupeesInput);
console.log(`${rupeesInput} Rupees = $${dollarOutput.toFixed(2)}`);






