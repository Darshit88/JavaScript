
function calculateRectangleArea(length, width) {
    return length * width;
}

function calculateTriangleArea(base, height) {
    return (base * height) / 2;
}

function calculateCircleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}

const rectangleArea = calculateRectangleArea(6, 10);
const triangleArea = calculateTriangleArea(7, 4);
const circleArea = calculateCircleArea(7);

console.log("Rectangle Area:", rectangleArea);
console.log("Triangle Area:", triangleArea);
console.log("Circle Area:", circleArea);
