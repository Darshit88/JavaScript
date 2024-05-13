// Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

const celsiusValue = 25;
const fahrenheitValue = celsiusToFahrenheit(celsiusValue);
console.log(`${celsiusValue}°C = ${fahrenheitValue.toFixed(2)}°F`);

const fahrenheitInput = 68;
const celsiusOutput = fahrenheitToCelsius(fahrenheitInput);
console.log(`${fahrenheitInput}°F = ${celsiusOutput.toFixed(2)}°C`);
