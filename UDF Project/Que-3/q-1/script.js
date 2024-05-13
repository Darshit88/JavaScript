// meter to feet
function metersToFeet(meters) {
    const feetPerMeter = 3.28084;
    return meters * feetPerMeter;
}
// feet to meter
function feetToMeters(feet) {
    const metersPerFoot = 0.3048;
    return feet * metersPerFoot;
}

const metersValue = 30;
const feetValue = metersToFeet(metersValue);
console.log(`${metersValue} meters = ${feetValue.toFixed(2)} feet`);

const feetInput = 30;
const metersOutput = feetToMeters(feetInput);
console.log(`${feetInput} feet = ${metersOutput.toFixed(2)} meters`);
